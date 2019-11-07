window.kiln.componentTemplates['subheader']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "  <"
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":3},"end":{"line":2,"column":11}}}) : helper)))
    + " class=\""
    + alias5(((helper = (helper = helpers.componentVariation || (depth0 != null ? depth0.componentVariation : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"componentVariation","hash":{},"data":data,"loc":{"start":{"line":2,"column":19},"end":{"line":2,"column":43}}}) : helper)))
    + "\" data-editable=\"subheader\" data-uri=\""
    + alias5((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":81},"end":{"line":2,"column":103}}}))
    + "\" id="
    + alias5(((helper = (helper = helpers.subheaderId || (depth0 != null ? depth0.subheaderId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"subheaderId","hash":{},"data":data,"loc":{"start":{"line":2,"column":108},"end":{"line":2,"column":123}}}) : helper)))
    + ">\n  "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":12}}}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "</"
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":10}}}) : helper)))
    + ">\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "  <a href=\"#"
    + container.escapeExpression(((helper = (helper = helpers.subheaderid || (depth0 != null ? depth0.subheaderid : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subheaderid","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":27}}}) : helper)))
    + "\" class=\"link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z\"/></svg>\n  </a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "");
},"useData":true}
