window.kiln.componentTemplates['list']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <div data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":41}}}))
    + "\" class=\"list "
    + alias4(helpers["if"].call(alias2,(depth0 != null ? depth0.customIndicator : depth0),"custom-indicator",{"name":"if","hash":{},"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":2,"column":98}}}))
    + "\" data-editable=\"settings\">\n  <"
    + alias4(((helper = (helper = helpers.listType || (depth0 != null ? depth0.listType : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"listType","hash":{},"data":data,"loc":{"start":{"line":3,"column":3},"end":{"line":3,"column":15}}}) : helper)))
    + " class=\"list-items\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
    + "  </"
    + alias4(((helper = (helper = helpers.listType || (depth0 != null ? depth0.listType : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"listType","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":16}}}) : helper)))
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.css : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "      <li class=\"list-item\"><span>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":46}}}) : helper))) != null ? stack1 : "")
    + "</span></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "    <style>"
    + ((stack1 = ((helper = (helper = helpers.css || (depth0 != null ? depth0.css : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"css","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":22}}}) : helper))) != null ? stack1 : "")
    + "</style>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":16,"column":10}}})) != null ? stack1 : "");
},"useData":true}
