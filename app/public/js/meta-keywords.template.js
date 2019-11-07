window.kiln.componentTemplates['meta-keywords']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <!-- data-uri=\""
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":43}}})) != null ? stack1 : "")
    + "\" -->\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "  <meta property=\"article:tag\" content=\""
    + alias4((helpers.join||(depth0 && depth0.join)||alias3).call(alias2,(helpers.map||(depth0 && depth0.map)||alias3).call(alias2,(depth0 != null ? depth0.tags : depth0),(helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"text",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":4,"column":58},"end":{"line":4,"column":74}}}),{"name":"map","hash":{},"data":data,"loc":{"start":{"line":4,"column":48},"end":{"line":4,"column":75}}}),{"name":"join","hash":{},"data":data,"loc":{"start":{"line":4,"column":40},"end":{"line":4,"column":78}}}))
    + "\">\n  <meta property=\"sailthru.tags\" content=\""
    + alias4((helpers.join||(depth0 && depth0.join)||alias3).call(alias2,(helpers.map||(depth0 && depth0.map)||alias3).call(alias2,(depth0 != null ? depth0.tags : depth0),(helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"text",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":76}}}),{"name":"map","hash":{},"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":77}}}),{"name":"join","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":80}}}))
    + "\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "  <meta property=\"article:tag\" content=\""
    + alias4((helpers.join||(depth0 && depth0.join)||alias3).call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"join","hash":{},"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":55}}}))
    + "\">\n  <meta property=\"sailthru.tags\" content=\""
    + alias4((helpers.join||(depth0 && depth0.join)||alias3).call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"join","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":57}}}))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "");
},"useData":true}
