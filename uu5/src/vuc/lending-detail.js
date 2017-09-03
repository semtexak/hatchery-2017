import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import VehicleDetail from "./vehicle-detail";
import ClientDetail from "./client-detail";

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
            onLoad: "findLending",
            create: "addStk",
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState() {
        return {
            showForm: false,
            lendingID: 0
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
            lendingID: this.props.lendingID
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

    _handleCancelFilter() {
        this.setState({
            loadFeedback: "loading",
            filtered: false
        }, () => this.reload())
    },

    _formatClientName(lending) {
        return lending ? (lending.client.name + " " + (!lending.client.surname ? "" : lending.client.surname)) : "--";
    },

    _handleLoadedVehicle(lending) {
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Row>
                    <UU5.Bricks.Column colWidth='xs-12 sm-12 md-12 lg-12'>
                        <UU5.Bricks.Panel header="Lending" alwaysExpanded={true}
                                          disableHeaderClick={true}>
                            <UU5.Bricks.Table striped>
                                <UU5.Bricks.Table.THead>
                                    <UU5.Bricks.Table.Tr>
                                    </UU5.Bricks.Table.Tr>
                                </UU5.Bricks.Table.THead>
                                <UU5.Bricks.Table.TBody>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>VIN:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>
                                            <UU5.Bricks.Link content={lending.vehicle.vin} onClick={() => {
                                                UU5.Environment.setRoute(<VehicleDetail vehicleID={lending.vehicle.id} />);
                                            }} />
                                        </UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Typ:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{lending.vehicle.type}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Klient:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>
                                            <UU5.Bricks.Link content={this._formatClientName(lending)} onClick={() => {
                                                UU5.Environment.setRoute(<ClientDetail clientID={lending.client.id} />);
                                            }} />
                                        </UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Zapůjčeno od:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{lending.lendFrom}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Zapůjčeno od:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{lending.lendTo}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
                                    <UU5.Bricks.Table.Tr>
                                        <UU5.Bricks.Table.Td><strong>Cena:</strong></UU5.Bricks.Table.Td>
                                        <UU5.Bricks.Table.Td>{lending.price}</UU5.Bricks.Table.Td>
                                    </UU5.Bricks.Table.Tr>
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
                <UU5.Bricks.Header level={2}>Detail zápůjčky</UU5.Bricks.Header>
                {this._getNewForm()}
                {this.getLoadFeedbackChildren(this._handleLoadedVehicle)}
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
