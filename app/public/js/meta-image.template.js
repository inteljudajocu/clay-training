window.kiln.componentTemplates['meta-image']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <!-- data-uri=\""
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":41}}}))
    + "\" -->\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageUrl : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <meta content=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageUrl : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":17},"end":{"line":4,"column":54}}})) != null ? stack1 : "")
    + "\" name=\"twitter:image\">\n  <meta property=\"og:image\" content=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageUrl : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":74}}})) != null ? stack1 : "")
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":47}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":10}}})) != null ? stack1 : "");
},"useData":true}
