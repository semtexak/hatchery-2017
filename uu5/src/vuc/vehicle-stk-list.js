import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import TractorDetail from "./vehicle-detail";

import Calls from "calls"

export default React.createClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.RouteMixin,
        UU5.Common.LoadMixin,
        UU5.Common.CcrReaderMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".TractorList",
        classNames: {
            main: Cfg.CSS + "-tractor-list"
        },
        calls: {
            onLoad: "vehicleStk",
            find: "findVehicleStk"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState() {
        return {
            showForm: false,
            filtered: false,
        }
    },

    componentWillMount() {
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers
    _getNewForm() {
        if (!this.state.showForm) {
            return null;
        }

        return (
            <UU5.Bricks.Panel header="Přidání STK vozidla" alwaysExpanded={true} disableHeaderClick={true}>
                <UU5.Forms.BasicForm ref_={this._handleNewFormReference}>
                    <UU5.Forms.Text name="type" value="RECLAIMER" label="Typ"/>
                    <UU5.Forms.Text name="vin" value="AHTBB3QD001726541" label="VIN"/>
                    <UU5.Forms.Text name="date" value="1487812893" label="Datum"/>
                    <UU5.Forms.Text name="price" value="1100000" label="Cena"/>
                </UU5.Forms.BasicForm>

                <UU5.Bricks.Button colorSchema="warning" onClick={this._handleCancelClick}>Zavřít</UU5.Bricks.Button>
                <UU5.Bricks.Button colorSchema="primary" onClick={this._handleCreateNewCar}>Uložit</UU5.Bricks.Button>
            </UU5.Bricks.Panel>
        )
    },

    _getFilterForm() {
        return (
            <UU5.Forms.BasicForm ref_={this._handleFilterFormReference}>
                <UU5.Bricks.Row>
                    <UU5.Bricks.Column colWidth="lg-3">
                        {/*<UU5.Forms.Datepicker*/}
                            {/*name="checkDate"*/}
                            {/*label="Od"*/}
                            {/*glyphiconOpened="uu-glyphicon-ok"*/}
                            {/*glyphiconClosed="glyphicon-calendar"*/}
                            {/*value="2007-08-21"*/}
                            {/*format="Y-mm-dd"*/}
                        {/*/>*/}
                        <UU5.Forms.Text name="checkDateFrom" label="Od" controlled={false} value="2007-08-21"/>
                    </UU5.Bricks.Column>
                    <UU5.Bricks.Column colWidth="lg-3">
                        {/*<UU5.Forms.Datepicker*/}
                            {/*name="checkDate"*/}
                            {/*label="Do"*/}
                            {/*glyphiconOpened="uu-glyphicon-ok"*/}
                            {/*glyphiconClosed="glyphicon-calendar"*/}
                            {/*value="2007-08-23"*/}
                        {/*/>*/}
                        <UU5.Forms.Text name="checkDateTo" label="Do" controlled={false} value="2007-08-23"/>
                    </UU5.Bricks.Column>

                    <UU5.Bricks.Column colWidth="lg-6">
                        <UU5.Bricks.Button content="Filtruj" onClick={this._handleFilterClick}/>
                        <UU5.Bricks.Button
                            colorSchema="warning"
                            disabled={!this.state.filtered}
                            content="Zruš filtr"
                            onClick={this._handleCancelFilter}
                        />
                    </UU5.Bricks.Column>
                </UU5.Bricks.Row>
            </UU5.Forms.BasicForm>
        );
    },

    _getPanelHeader() {
        let button = !this.state.showForm && (
            <UU5.Bricks.Button size="xs" onClick={this._handleShowFormClick}
                               className="pull-right">Přidat</UU5.Bricks.Button>
        );

        return <UU5.Bricks.Div>Seznam vozidel {button}</UU5.Bricks.Div>
    },

    _handleNewFormReference(form) {
        this._addForm = form;
    },

    _handleFilterFormReference(form) {
        this._filterForm = form
    },

    _handleCreateNewCar() {
        let formData = this._addForm.getValues();

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
    },

    _handleCancelFilter() {
        this.setState({
            loadFeedback: "loading",
            filtered: false
        }, () => this.reload())
    },

    _handleShowFormClick() {
        this.setState({showForm: true})
    },

    _handleCancelClick() {
        this.setState({showForm: false})
    },

    _handleFilterClick() {
        this.setState({
            loadFeedback: "loading"
        }, () => {
            this.getCall("find")({
                data: this._filterForm.getValues(),
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

    _handlePaginationClick(index) {
        this.setState({
            actual: index,
            loadFeedback: "loading"
        }, () => {
            this.getCall("onLoad")({
                data: {page: ++index},
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

    _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href)
    },

    _handleLoadedTractors(tractors) {
        if (!tractors || tractors.totalElements === 0) {
            return <UU5.Bricks.P>Není tu žádný traktor</UU5.Bricks.P>
        }
        let vehicles = tractors.content;

        let lines = vehicles.map((vehicle) => (
            <UU5.Bricks.Table.Tr key={vehicle.id}>
                <UU5.Bricks.Table.Td>
                    <UU5.Bricks.Link content={vehicle.vin} onClick={() => {
                        UU5.Environment.setRoute(<TractorDetail vehicleID={vehicle.id} />);
                    }} />
                </UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{vehicle.type}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{vehicle.checkDate}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td></UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));

        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Table striped>
                    <UU5.Bricks.Table.THead>
                        <UU5.Bricks.Table.Tr>
                            <UU5.Bricks.Table.Th>VIN</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Typ</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Datum konce STK</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Klient</UU5.Bricks.Table.Th>
                        </UU5.Bricks.Table.Tr>
                    </UU5.Bricks.Table.THead>
                    <UU5.Bricks.Table.TBody>
                        {lines}
                    </UU5.Bricks.Table.TBody>
                </UU5.Bricks.Table>
                <UU5.Bricks.Pagination
                    ref_={(r) => this._pagination = r}
                    colorSchema='success'
                    items={Array.from(new Array(tractors.totalPages),(val,index)=>index)}
                    firstGlyphicon='glyphicon-backward'
                    lastGlyphicon='glyphicon-forward'
                    onChanged={(comp, index) => this._handlePaginationClick(index)}
                />
            </UU5.Bricks.Div>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Header level={2}>Seznam vozidel (STK)</UU5.Bricks.Header>

                {this._getNewForm()}
                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    {this._getFilterForm()}

                    {this.getLoadFeedbackChildren(this._handleLoadedTractors)}
                </UU5.Bricks.Panel>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
