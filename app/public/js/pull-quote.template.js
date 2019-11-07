window.kiln.componentTemplates['pull-quote']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <aside data-uri=\""
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":19},"end":{"line":2,"column":43}}}))
    + "\" class=\"pull-quote\" itemscope data-editable=\"inlineGroup\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.quote : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.attribution : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "</aside>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <span class=\"pull-quote-text "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.hasQuoteMarks : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":76}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.quote || (depth0 != null ? depth0.quote : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"quote","hash":{},"data":data,"loc":{"start":{"line":4,"column":78},"end":{"line":4,"column":91}}}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "has-quote-marks";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "    <span class=\"pull-quote-attribution\">&mdash; "
    + ((stack1 = ((helper = (helper = helpers.attribution || (depth0 != null ? depth0.attribution : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"attribution","hash":{},"data":data,"loc":{"start":{"line":8,"column":49},"end":{"line":8,"column":68}}}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":10}}})) != null ? stack1 : "");
},"useData":true}
