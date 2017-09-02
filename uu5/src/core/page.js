import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "./_config.js";

import VehicleList from "../vuc/vehicle-list.js"
import VehicleDetail from "../vuc/vehicle-detail.js"
import LendingDetail from "../vuc/lending-detail.js"
import VehicleStkList from "../vuc/vehicle-stk-list.js"
import About from "../vuc/about.js"

import Header from "../core/header.js"

import "./page.less"

export default React.createClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName: Cfg.APP + ".Page",
    classNames:{
      main: Cfg.CSS + "-page"
    }
  },
  //@@viewOff:statics

  //@@viewOn:standardComponentLifeCycle
  componentWillMount() {
    this._changeTitle();
    UU5.Environment.EventListener.registerLsi(this.getId(), this._changeTitle);
  },

  componentWillUnmount() {
    UU5.Environment.EventListener.unregisterLsi(this.getId());
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:componentSpecificHelpers
  _changeTitle() {
    document.title = this.getLSIItem(Cfg.titleLsi);
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    let routerBasePath = location.pathname.replace(/(\/.*?\/.*?)\/.*/, "$1");

    return (
      <UU5.Bricks.Page
        top={<Header/>}
        {...this.getMainPropsToPass()}
      >
        <UU5.Common.Router
          route="/"
          routes={{
            "/": {component: <VehicleList />},
            "/about": {component: <About/>},
            "/vehicles": {component: <VehicleList/>},
            "/lendings": {component: <LendingDetail/>},
            "/stk": {component: <VehicleStkList/>},
          }}
          basePath={routerBasePath}
        />
      </UU5.Bricks.Page>
    );
  }
  //@@viewOff:render
});
