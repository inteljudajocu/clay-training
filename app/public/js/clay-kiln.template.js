window.kiln.componentTemplates['clay-kiln']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.user),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":77,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div data-uri=\""
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":4,"column":17},"end":{"line":4,"column":41}}}))
    + "\" class=\"clay-kiln\">\n    <style>\n      /* Noto font - regular, regular italic, bold (no bold italic) */\n      @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700');\n      /* Material Design Icon Font */\n      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n    </style>\n    <script>\n      // start scaffolding kiln stuff\n      window.kiln = window.kiln || {};\n    </script>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":52,"column":11}}})) != null ? stack1 : "")
    + "\n    <div id=\"kiln-app\"></div>\n\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":58,"column":4},"end":{"line":65,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "      <style>\n          "
    + ((stack1 = (helpers.read||(depth0 && depth0.read)||alias3).call(alias2,"node_modules/clay-kiln/dist/clay-kiln-edit.css",{"name":"read","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":71}}})) != null ? stack1 : "")
    + "\n      </style>\n\n      <script>\n        // scaffold kiln preloading stuff (models, templates, schemae, data, locals),\n        window.kiln.componentModels = window.kiln.componentModels || {};\n        window.kiln.componentTemplates = window.kiln.componentTemplates || {};\n        window.kiln.preloadSchemas = window.kiln.preloadSchemas || {};\n\n        // then preload schemae and data for components on the page\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (data && data.root)) && stack1._componentSchemas),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":31,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (data && data.root)) && stack1._layoutData),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":35,"column":15}}})) != null ? stack1 : "")
    + "        window.kiln.preloadData = "
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(helpers.replace||(depth0 && depth0.replace)||alias3).call(alias2,(helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,(data && data.root),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":36,"column":55},"end":{"line":36,"column":72}}}),"</script>","<\"+\"/script>",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":36,"column":46},"end":{"line":36,"column":100}}}),"{}",{"name":"default","hash":{},"data":data,"loc":{"start":{"line":36,"column":34},"end":{"line":36,"column":109}}})) != null ? stack1 : "")
    + ";\n        window.kiln.locals = "
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,((stack1 = (data && data.root)) && stack1.locals),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":37,"column":41},"end":{"line":37,"column":65}}}),"{}",{"name":"default","hash":{},"data":data,"loc":{"start":{"line":37,"column":29},"end":{"line":37,"column":74}}})) != null ? stack1 : "")
    + ";\n        // and add the environment variables for model.js\n        window.process = window.process || {};\n        window.process.env = "
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,((stack1 = (data && data.root)) && stack1._envVars),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":40,"column":41},"end":{"line":40,"column":67}}}),"{}",{"name":"default","hash":{},"data":data,"loc":{"start":{"line":40,"column":29},"end":{"line":40,"column":76}}})) != null ? stack1 : "")
    + ";\n      </script>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "          window.kiln.preloadSchemas['"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "'] = "
    + ((stack1 = (helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,(helpers.yaml||(depth0 && depth0.yaml)||alias3).call(alias2,(helpers.read||(depth0 && depth0.read)||alias3).call(alias2,(depth0 != null ? depth0.schema : depth0),{"name":"read","hash":{},"data":data,"loc":{"start":{"line":30,"column":78},"end":{"line":30,"column":96}}}),{"name":"yaml","hash":{},"data":data,"loc":{"start":{"line":30,"column":72},"end":{"line":30,"column":97}}}),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":30,"column":58},"end":{"line":30,"column":101}}})) != null ? stack1 : "")
    + ";\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "          window.kiln.layout = "
    + ((stack1 = (helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,((stack1 = (data && data.root)) && stack1._layoutData),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":33,"column":31},"end":{"line":33,"column":66}}})) != null ? stack1 : "")
    + ";\n          window.kiln.layout.schema = "
    + ((stack1 = (helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,(helpers.yaml||(depth0 && depth0.yaml)||alias3).call(alias2,(helpers.read||(depth0 && depth0.read)||alias3).call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1._layoutData)) && stack1.schema),{"name":"read","hash":{},"data":data,"loc":{"start":{"line":34,"column":58},"end":{"line":34,"column":89}}}),{"name":"yaml","hash":{},"data":data,"loc":{"start":{"line":34,"column":52},"end":{"line":34,"column":90}}}),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":34,"column":38},"end":{"line":34,"column":94}}})) != null ? stack1 : "")
    + ";\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "      <style>\n          "
    + ((stack1 = (helpers.read||(depth0 && depth0.read)||alias3).call(alias2,"node_modules/clay-kiln/dist/clay-kiln-view.css",{"name":"read","hash":{},"data":data,"loc":{"start":{"line":45,"column":10},"end":{"line":45,"column":71}}})) != null ? stack1 : "")
    + "\n      </style>\n\n      <script>\n        window.kiln.preloadSite = "
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":49,"column":46},"end":{"line":49,"column":75}}}),"{}",{"name":"default","hash":{},"data":data,"loc":{"start":{"line":49,"column":34},"end":{"line":49,"column":84}}})) != null ? stack1 : "")
    + ";\n        window.kiln.preloadUser = "
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(helpers.stringify||(depth0 && depth0.stringify)||alias3).call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.user),{"name":"stringify","hash":{},"data":data,"loc":{"start":{"line":50,"column":46},"end":{"line":50,"column":75}}}),"{}",{"name":"default","hash":{},"data":data,"loc":{"start":{"line":50,"column":34},"end":{"line":50,"column":84}}})) != null ? stack1 : "")
    + ";\n      </script>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "      <script src=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site)) && stack1.assetHost),((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site)) && stack1.assetPath),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":59,"column":19},"end":{"line":59,"column":88}}}))
    + "/js/clay-kiln-edit.js?version="
    + alias4(((helper = (helper = helpers.kilnVersion || (depth0 != null ? depth0.kilnVersion : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"kilnVersion","hash":{},"data":data,"loc":{"start":{"line":59,"column":118},"end":{"line":59,"column":135}}}) : helper)))
    + "\"></script>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "      <script src=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site)) && stack1.assetHost),((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site)) && stack1.assetPath),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":61,"column":19},"end":{"line":61,"column":88}}}))
    + "/js/clay-kiln-view.js?version="
    + alias4(((helper = (helper = helpers.kilnVersion || (depth0 != null ? depth0.kilnVersion : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"kilnVersion","hash":{},"data":data,"loc":{"start":{"line":61,"column":118},"end":{"line":61,"column":135}}}) : helper)))
    + "\"></script>\n\n      <div class=\"clay-kiln-logo\">"
    + ((stack1 = (helpers.read||(depth0 && depth0.read)||alias3).call(alias2,"node_modules/clay-kiln/media/clay-logo.svg",{"name":"read","hash":{},"data":data,"loc":{"start":{"line":64,"column":34},"end":{"line":64,"column":91}}})) != null ? stack1 : "")
    + "</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "  <style>\n    "
    + ((stack1 = (helpers.read||(depth0 && depth0.read)||alias3).call(alias2,"node_modules/clay-kiln/dist/clay-kiln-view-public.css",{"name":"read","hash":{},"data":data,"loc":{"start":{"line":70,"column":4},"end":{"line":70,"column":72}}})) != null ? stack1 : "")
    + "\n  </style>\n  <div class=\"clay-kiln-logo\">"
    + ((stack1 = (helpers.read||(depth0 && depth0.read)||alias3).call(alias2,"node_modules/clay-kiln/media/clay-logo.svg",{"name":"read","hash":{},"data":data,"loc":{"start":{"line":72,"column":30},"end":{"line":72,"column":87}}})) != null ? stack1 : "")
    + "</div>\n  <script>\n    "
    + ((stack1 = (helpers.read||(depth0 && depth0.read)||alias3).call(alias2,"node_modules/clay-kiln/dist/clay-kiln-view-public.js",{"name":"read","hash":{},"data":data,"loc":{"start":{"line":75,"column":4},"end":{"line":75,"column":71}}})) != null ? stack1 : "")
    + "\n  </script>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":81,"column":10}}})) != null ? stack1 : "");
},"useData":true}
