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
            onLoad: "findVehicle"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState() {
        return {
            vehicleID: 0
        }
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

    _formatPanelHeader(vehicle) {
        return vehicle.vin + (vehicle.nickname ? "(" +vehicle.nickname + ")" : "");
    },

    _handleLoadedVehicle(vehicle) {
        return (
            <UU5.Bricks.Div>

                <UU5.Bricks.Panel header={this._formatPanelHeader(vehicle)} alwaysExpanded={true} disableHeaderClick={true}>
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
                <UU5.Bricks.Table striped>
                    <UU5.Bricks.Table.THead>
                        <UU5.Bricks.Table.Tr>
                            <UU5.Bricks.Table.Th>VIN</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Typ</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Stáří</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Stav</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Klient</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Akce</UU5.Bricks.Table.Th>
                        </UU5.Bricks.Table.Tr>
                    </UU5.Bricks.Table.THead>
                    <UU5.Bricks.Table.TBody>

                    </UU5.Bricks.Table.TBody>
                </UU5.Bricks.Table>
            </UU5.Bricks.Div>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Header level={2}>Detail vozidla</UU5.Bricks.Header>

                {this.getLoadFeedbackChildren(this._handleLoadedVehicle)}
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
