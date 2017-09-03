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

    _handleLoadedData(data) {
        let repairs = data.content.map((repair) => (
            <UU5.Bricks.Table.Tr key={repair.id}>
                <UU5.Bricks.Table.Td>{repair.repairedAt}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repair.price}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repair.repairResolution}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));
        return (
            <UU5.Bricks.Accordion glyphiconExpanded="uu-glyphicon-arrow-up"
                                  glyphiconCollapsed="uu-glyphicon-arrow-down">
                <UU5.Bricks.Panel header="Seznam oprav">
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
                {this.getLoadFeedbackChildren(this._handleLoadedData)}
            </UU5.Bricks.Div>
        )
    }
    //@@viewOff:render
});
