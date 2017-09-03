import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import LendingDetail from "./lending-detail";

import Calls from "calls"

export default React.createClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.LoadMixin,
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".TractorList",
        classNames: {
            main: Cfg.CSS + "-tractor-list"
        },
        calls: {
            onLoad: "loadLendingsForClient",
            create: "addLending",
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getDefaultProps() {
        return {
            clientID: 0
        };
    },
    componentWillMount() {
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers

    getOnLoadData_() {
        return {
            clientID: this.props.clientID
        }
    },

    _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href)
    },

    _handlePaginationClick(index) {
        this.setState({
            actual: index,
            loadFeedback: "loading"
        }, () => {
            this.getCall("onLoad")({
                data: {page: index, clientID: this.props.clientID},
                done: (data) => {
                    this.setState({
                        dtoOut: data,
                        loadFeedback: "ready",
                        filtered: true
                    })
                },
                fail: (response) => console.error(response)
            })
        })
    },

    _handleShowFormClick() {
        this.setState({showForm: true})
    },

    _handleCancelClick() {
        this.setState({showForm: false})
    },

    _getPanelHeader() {
        let button = !this.state.showForm && (
            <UU5.Bricks.Button size="xs" onClick={this._handleShowFormClick}
                               className="pull-right">Přidat</UU5.Bricks.Button>
        );

        return <UU5.Bricks.Div>Zápůjčky {button}</UU5.Bricks.Div>
    },

    _handleNewFormReference(form) {
        this._addForm = form;
    },

    _renderSelectType() {
        return (
            <UU5.Forms.Select name="type" label="Typ:" value='BULLDOZER'>
                <UU5.Forms.Select.Option value="BULLDOZER" />
                <UU5.Forms.Select.Option value="TRACTOR" />
                <UU5.Forms.Select.Option value="DREDGING" />
                <UU5.Forms.Select.Option value="EXCAVATOR" />
                <UU5.Forms.Select.Option value="RECLAIMER" />
                <UU5.Forms.Select.Option value="SKIDDER" />
                <UU5.Forms.Select.Option value="LOADER" />
                <UU5.Forms.Select.Option value="FORKLIFT" />
                <UU5.Forms.Select.Option value="DUMP_TRUCK" />
                <UU5.Forms.Select.Option value="ROAD_ROLLER" />
                <UU5.Forms.Select.Option value="TRACKED_LOADER" />
            </UU5.Forms.Select>
        );
    },

    _renderSelectVehicles() {
        return (
            <UU5.Forms.Select name="type" label="Vozidlo:">
            </UU5.Forms.Select>
        );
    },

    _handleLoadVehicles() {
      if(this._addForm.isValid()) {
          let formData = this._addForm.getValues();
          this.setState({
              loadFeedback: "loading",
              showForm: false
          }, () => {
              this.getCall("findAvailableVehicles")({
                  data: formData,
                  done: () => {
                      this.reload()
                  },
                  fail: (response) => console.error(response)
              })
          });
      }
    },

    _proccessToStep2() {
        if(this._addForm.isValid()) {

        }
    },

    _handleCreateNewCar() {
        if(this._addForm.isValid()) {
            let formData = this._addForm.getValues();
            formData.clientId = this.props.clientID;
            // hide form and show loading
            this.setState({
                loadFeedback: "loading",
                showForm: false
            }, () => {
                this.getCall("create")({
                    data: formData,
                    done: () => {
                        this.reload()
                    },
                    fail: (response) => console.error(response)
                })
            });

            // clear up reference
            this._addForm = undefined
        }
    },

    _validateInputData(opt) {
        if(!opt.event) {
            return null;
        }
        console.log(this._addForm.getValues());
        // let at = (opt.value.indexOf('@') >= 0);
        // let feedback = at ? 'success' : 'error';
        // let message = at ? null : 'Not an email address :(.';
        return {feedback: "success", message: "OK", value: opt.value}

    },

    _getNewForm() {
        if (!this.state.showForm) {
            return null;
        }

        return (
            <UU5.Bricks.Panel header="Přidání nové zápůjčky" alwaysExpanded={true} disableHeaderClick={true}>
                <UU5.Forms.BasicForm ref_={this._handleNewFormReference}>
                    {this._renderSelectType()}
                    <UU5.Forms.Text name="lendFrom" label="Od" value="2017-01-01" onValidate={this._validateInputData} required/>
                    <UU5.Forms.Text name="lendTo" label="Do" value="2017-02-01" onValidate={this._validateInputData} required/>
                    <UU5.Forms.Text name="price" label="Cena" value="50000" required/>
                    <UU5.Forms.Text name="latitude" label="Latitude" value="50.124" required/>
                    <UU5.Forms.Text name="longitude" label="Longitude" value="15.004" required/>
                    {this._renderSelectVehicles()}
                </UU5.Forms.BasicForm>

                <UU5.Bricks.Button colorSchema="warning" onClick={this._handleCancelClick}>Zavřít</UU5.Bricks.Button>
                <UU5.Bricks.Button colorSchemaSchema="primary" onClick={this._proccessToStep2()}>Uložit</UU5.Bricks.Button>
            </UU5.Bricks.Panel>
        )
    },

    _handleLoadedData(data) {
        let lendings = data.content.map((lending) => (
            <UU5.Bricks.Table.Tr key={lending.id}>
                <UU5.Bricks.Table.Td>
                    <UU5.Bricks.Link content={lending.id} onClick={() => {
                        UU5.Environment.setRoute(<LendingDetail lendingID={lending.id} />);
                    }} />
                </UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{lending.lendFrom}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{lending.lendTo}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{lending.client.name}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));
        return (
            <UU5.Bricks.Accordion>
                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    <UU5.Bricks.Column colWidth='xs-12 sm-12 md-12 lg-12'>
                            <UU5.Bricks.Table striped>
                                <UU5.Bricks.Table.THead>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Th>ID zápůjčky</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Datum od</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Datum do</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Klient</UU5.Bricks.Table.Th>
                                    </UU5.Bricks.Table.Tr>
                                </UU5.Bricks.Table.THead>
                                <UU5.Bricks.Table.TBody>
                                    {lendings}
                                </UU5.Bricks.Table.TBody>
                            </UU5.Bricks.Table>
                    </UU5.Bricks.Column>
                    <center>
                    <UU5.Bricks.Pagination
                        ref_={(r) => this._pagination = r}
                        colorSchema='success'
                        items={Array.from(new Array(data.totalPages),(val,index)=>index+1)}
                        firstGlyphicon='glyphicon-backward'
                        lastGlyphicon='glyphicon-forward'
                        onChanged={(comp, index) => this._handlePaginationClick(index)}
                    />
                    </center>
                </UU5.Bricks.Panel>
            </UU5.Bricks.Accordion>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div {...this.getMainPropsToPass()}>
                {this._getNewForm()}
                {this.getLoadFeedbackChildren(this._handleLoadedData)}
            </UU5.Bricks.Div>
        )
    }
    //@@viewOff:render
});
