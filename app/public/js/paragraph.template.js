window.kiln.componentTemplates['paragraph']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <p data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":15},"end":{"line":2,"column":39}}}))
    + "\" data-editable=\"text\" class=\""
    + alias4(((helper = (helper = helpers.componentVariation || (depth0 != null ? depth0.componentVariation : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"componentVariation","hash":{},"data":data,"loc":{"start":{"line":2,"column":69},"end":{"line":2,"column":93}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":2,"column":95},"end":{"line":2,"column":107}}}) : helper))) != null ? stack1 : "")
    + "</p>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":10}}})) != null ? stack1 : "");
},"useData":true}
