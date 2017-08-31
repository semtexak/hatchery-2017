export default {
    namespace: 'UU.DemoApp',
    cssPrefix: 'uu-demoapp',
    tag: function(component) {return this.namespace + '.' + component;},
    css: function(component) {return this.cssPrefix + '-' + component;},
  };