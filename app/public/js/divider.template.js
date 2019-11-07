window.kiln.componentTemplates['divider']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "  <div class=\"divider "
    + alias4(((helper = (helper = helpers.componentVariation || (depth0 != null ? depth0.componentVariation : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"componentVariation","hash":{},"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":2,"column":46}}}) : helper)))
    + "\" data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":58},"end":{"line":2,"column":82}}}))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias2,(helpers.compare||(depth0 && depth0.compare)||alias3).call(alias2,(depth0 != null ? depth0.componentVariation : depth0),"===","divider",{"name":"compare","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":52}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "");
},"useData":true}
