import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

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
            onLoad: "loadRepairsForVehicle",
            create: "addRepair"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getDefaultProps() {
        return {
            vehicleID: 0
        };
    },
    componentWillMount() {
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers

    getOnLoadData_() {
        return {
            vehicleID: this.props.vehicleID
        }
    },

    _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href)
    },

    _handleShowFormClick() {
        this.setState({showForm: true})
    },

    _handleCancelClick() {
        this.setState({showForm: false})
    },

    _handleNewFormReference(form) {
        this._addForm = form;
    },

    _getNewForm() {
        if (!this.state.showForm) {
            return null;
        }

        return (
            <UU5.Bricks.Panel header="Přidání nového vozidla" alwaysExpanded={true} disableHeaderClick={true}>
                <UU5.Forms.BasicForm ref_={this._handleNewFormReference}>
                    <UU5.Forms.Datepicker name="repairedAt" placeholder="Vyplňte datum uskutečnení oprav" controlled={true} label="Datum opravy" required />
                    <UU5.Forms.Text name="price" placeholder="Cena" label="Cena" required />
                    <UU5.Forms.Text name="repairResolution" placeholder="Opravy" label="Opravy" />
                </UU5.Forms.BasicForm>

                <UU5.Bricks.Button colorSchema="warning" onClick={this._handleCancelClick}>Zavřít</UU5.Bricks.Button>
                <UU5.Bricks.Button colorSchema="primary" onClick={this._handleCreateNewRepair}>Uložit</UU5.Bricks.Button>
            </UU5.Bricks.Panel>
        )
    },

    _handleCreateNewRepair() {
        if(this._addForm.isValid()) {
            let formData = this._addForm.getValues();
            formData.vehicleId = this.props.vehicleID;
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

    _getPanelHeader() {
        let button = !this.state.showForm && (
            <UU5.Bricks.Button size="xs" onClick={this._handleShowFormClick}
                               className="pull-right">Přidat opravu</UU5.Bricks.Button>
        );

        return <UU5.Bricks.Div>Seznam oprav {button}</UU5.Bricks.Div>
    },

    _handleLoadedData(data) {
        let repairs = data.content.map((repair) => (
            <UU5.Bricks.Table.Tr key={repair.id}>
                <UU5.Bricks.Table.Td>{repair.repairedAt}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repair.price}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repair.repairResolution}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));
        return (
            <UU5.Bricks.Accordion>
                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    <UU5.Bricks.Column colWidth='xs-12 sm-12 md-12 lg-12'>
                            <UU5.Bricks.Table striped>
                                <UU5.Bricks.Table.THead>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Th>Datum</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Cena</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Opravy</UU5.Bricks.Table.Th>
                                    </UU5.Bricks.Table.Tr>
                                </UU5.Bricks.Table.THead>
                                <UU5.Bricks.Table.TBody>
                                    {repairs}
                                </UU5.Bricks.Table.TBody>
                            </UU5.Bricks.Table>
                    </UU5.Bricks.Column>
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
