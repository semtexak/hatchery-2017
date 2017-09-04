import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import LendingPanel from "./client-lending-panel.js";
import LendingForm from "./client-lending-form.js";
import ClientPanel from "./client-detail-panel.js";

import Calls from "calls"

export default React.createClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.RouteMixin,
        UU5.Common.CcrReaderMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".TractorList",
        classNames: {
            main: Cfg.CSS + "-tractor-list"
        },
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState() {
        return {
            showForm: false,
            vehicleID: 0,
            clientID: 0
        }
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
            vehicleID: this.props.vehicleID,
            clientID: this.props.clientID,
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
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div>
                {this._getNewForm()}
                <UU5.Bricks.Div>
                    <ClientPanel clientID={this.props.clientID} />
                    <LendingForm clientID={this.props.clientID} />
                    <LendingPanel clientID={this.props.clientID} />
                </UU5.Bricks.Div>
                {/*{this.getLoadFeedbackChildren(this._handleLoadedVehicle)}*/}
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
