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
            onLoad: "findVehicle",
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

    _handleLoadedData(vehicle) {
        return (
            <UU5.Bricks.Row>
                <UU5.Bricks.Column colWidth='xs-12 sm-12 md-12 lg-12'>
                    <UU5.Bricks.Accordion>
                        <UU5.Bricks.Panel header="Informace o vozidle" alwaysExpanded={true}
                                          disableHeaderClick={true}
                                          colorSchema="primary">
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
                    </UU5.Bricks.Accordion>
                </UU5.Bricks.Column>
            </UU5.Bricks.Row>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div {...this.getMainPropsToPass()}>
                {this.getLoadFeedbackChildren(this._handleLoadedData)}
            </UU5.Bricks.Div>
        )
    }
    //@@viewOff:render
});
