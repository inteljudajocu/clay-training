window.kiln.componentTemplates['meta-authors']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "  <!-- data-uri=\""
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":43}}})) != null ? stack1 : "")
    + "\" -->\n<meta name=\"author\" content=\""
    + container.escapeExpression((helpers.join||(depth0 && depth0.join)||alias3).call(alias2,(helpers.map||(depth0 && depth0.map)||alias3).call(alias2,(depth0 != null ? depth0.authors : depth0),(helpers.getProp||(depth0 && depth0.getProp)||alias3).call(alias2,"text",{"name":"getProp","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":66}}}),{"name":"map","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":67}}}),{"name":"join","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":70}}}))
    + "\">\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":10}}})) != null ? stack1 : "");
},"useData":true}
