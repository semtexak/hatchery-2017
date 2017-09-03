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
            onLoad: "loadLendingsForVehicle",
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

    _handlePaginationClick(index) {
        this.setState({
            actual: index,
            loadFeedback: "loading"
        }, () => {
            this.getCall("onLoad")({
                data: {page: index, vehicleID: this.props.vehicleID},
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
            <UU5.Bricks.Accordion glyphiconExpanded="uu-glyphicon-arrow-up"
                                  glyphiconCollapsed="uu-glyphicon-arrow-down">
                <UU5.Bricks.Panel header="Zápůjčky" alwaysExpanded={true}>
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
                {this.getLoadFeedbackChildren(this._handleLoadedData)}
            </UU5.Bricks.Div>
        )
    }
    //@@viewOff:render
});
