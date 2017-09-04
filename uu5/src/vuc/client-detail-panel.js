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
            onLoad: "findClient",
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

    _handleLoadedData(client) {
        return (
            <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth='xs-12 sm-12 md-12 lg-12'>
                <UU5.Bricks.Accordion>
                    <UU5.Bricks.Panel header="Informace o klientovi" alwaysExpanded={true} disableHeaderClick={true} colorSchema="primary">
                <UU5.Bricks.Table striped>
                    <UU5.Bricks.Table.THead>
                        <UU5.Bricks.Table.Tr>
                            <UU5.Bricks.Table.Th>Jméno / Název společnosti</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>IČO</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>E-mail</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Adresa</UU5.Bricks.Table.Th>
                            <UU5.Bricks.Table.Th>Telefon</UU5.Bricks.Table.Th>
                        </UU5.Bricks.Table.Tr>
                    </UU5.Bricks.Table.THead>
                    <UU5.Bricks.Table.TBody>
                        <UU5.Bricks.Table.Tr>
                            <UU5.Bricks.Table.Td>{client.name} {client.surname === null ? "" : client.surname}</UU5.Bricks.Table.Td>
                            <UU5.Bricks.Table.Td>{client.email}</UU5.Bricks.Table.Td>
                            <UU5.Bricks.Table.Td>{client.ico}</UU5.Bricks.Table.Td>
                            <UU5.Bricks.Table.Td>{client.address}</UU5.Bricks.Table.Td>
                            <UU5.Bricks.Table.Td>{client.phone}</UU5.Bricks.Table.Td>
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
