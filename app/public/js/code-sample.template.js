window.kiln.componentTemplates['code-sample']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"code-sample\" data-uri=\""
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":37},"end":{"line":2,"column":61}}}))
    + "\" >\n    <div data-editable=\"code\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.html : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "           <pre class=\"language-"
    + alias5(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":44}}}) : helper)))
    + "\"><code class=\"language-"
    + alias5(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"language","hash":{},"data":data,"loc":{"start":{"line":6,"column":68},"end":{"line":6,"column":80}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"html","hash":{},"data":data,"loc":{"start":{"line":6,"column":82},"end":{"line":6,"column":92}}}) : helper))) != null ? stack1 : "")
    + "</code></pre>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "");
},"useData":true}
