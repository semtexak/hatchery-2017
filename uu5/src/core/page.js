import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "./_config.js";

import TractorList from "../vuc/tractor-list.js"
import TractorDetail from "../vuc/tractor-detail.js"
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
            "/": {component: <TractorList />},
            "/about": {component: <About/>},
            "/vehicles": {component: <TractorDetail/>},
            "/stk": {component: <VehicleStkList/>},
          }}
          basePath={routerBasePath}
        />
      </UU5.Bricks.Page>
    );
  }
  //@@viewOff:render
});
