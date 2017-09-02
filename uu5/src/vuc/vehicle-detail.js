import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

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
            onLoad: "findVehicle",
            create: "addStk",
            load: "loadLendingsForVehicle"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState() {
        return {
            showForm: false,
            vehicleID: 0
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
            <UU5.Bricks.Panel header="Přidání STK" alwaysExpanded={true} disableHeaderClick={true}>
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

    _getPanelHeader(vehicle) {
        let button = !this.state.showForm && (
            <UU5.Bricks.Button size="xs" onClick={this._handleShowFormClick}
                               className="pull-right">Přidat STK</UU5.Bricks.Button>
        );

        return <UU5.Bricks.Div>{vehicle.vin + (vehicle.nickname ? "(" + vehicle.nickname + ")" : "")} {button}</UU5.Bricks.Div>
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

    getOnLoadData_() {
        return {
            vehicleID: this.props.vehicleID
        }
    },

    _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href)
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

    _handleLoadLendingData() {
        this.getCall("load")({
            data: {vehicleID: this.props.vehicleID},
            done: () => {
                this.reload()
            },
            fail: (response) => console.error(response)
        })
    },

    _handleCancelFilter() {
        this.setState({
            loadFeedback: "loading",
            filtered: false
        }, () => this.reload())
    },

    _handleLoadedVehicle(vehicle) {
        let stk = vehicle.vehicleMots.map((mot) => (
            <UU5.Bricks.Table.Tr key={mot.id}>
                <UU5.Bricks.Table.Td>{mot.checkDate}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{mot.passed}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{mot.comment}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));

        let repairs = vehicle.vehicleRepairs.map((repair) => (
            <UU5.Bricks.Table.Tr key={repair.id}>
                <UU5.Bricks.Table.Td>{repair.repairedAt}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repair.price}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repair.repairResolution}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));

        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Row>
                    <UU5.Bricks.Column colWidth='xs-12 sm-12 md-12 lg-12'>
                        <UU5.Bricks.Panel header={this._getPanelHeader(vehicle)} alwaysExpanded={true}
                                          disableHeaderClick={true}>
                            <UU5.Bricks.Table striped>
                                <UU5.Bricks.Table.THead>
                                    <UU5.Bricks.Table.Tr>
                                    </UU5.Bricks.Table.Tr>
                                </UU5.Bricks.Table.THead>
                                <UU5.Bricks.Table.TBody>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Typ:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{vehicle.type}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>VIN:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{vehicle.vin}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Stav:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{vehicle.vehicleState}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Datum pořízení:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{vehicle.dateOfAcquisition}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Cena:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{vehicle.price}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                </UU5.Bricks.Table.TBody>
                            </UU5.Bricks.Table>
                        </UU5.Bricks.Panel>
                    </UU5.Bricks.Column>
                </UU5.Bricks.Row>
                <UU5.Bricks.Row>

                    <UU5.Bricks.Column colWidth='xs-12 sm-6 md-6 lg-6'>
                        <UU5.Bricks.Panel header="Seznam STK" alwaysExpanded={true}
                                          disableHeaderClick={true}>
                            <UU5.Bricks.Table striped>
                                <UU5.Bricks.Table.THead>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Th>Datum</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Výsledek</UU5.Bricks.Table.Th>
                                        <UU5.Bricks.Table.Th>Komentář</UU5.Bricks.Table.Th>
                                    </UU5.Bricks.Table.Tr>
                                </UU5.Bricks.Table.THead>
                                <UU5.Bricks.Table.TBody>
                                    {stk}
                                </UU5.Bricks.Table.TBody>
                            </UU5.Bricks.Table>
                        </UU5.Bricks.Panel>
                    </UU5.Bricks.Column>
                    <UU5.Bricks.Column colWidth='xs-12 sm-6 md-6 lg-6'>
                        <UU5.Bricks.Panel header="Seznam oprav" alwaysExpanded={true}
                                          disableHeaderClick={true}>
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
                        </UU5.Bricks.Panel>
                    </UU5.Bricks.Column>
                </UU5.Bricks.Row>
            </UU5.Bricks.Div>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Header level={2}>Detail vozidla</UU5.Bricks.Header>
                {this._getNewForm()}
                {this.getLoadFeedbackChildren(this._handleLoadedVehicle)}
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
