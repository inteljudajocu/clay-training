window.kiln.componentTemplates['meta-title']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "  <!-- data-uri=\""
    + ((stack1 = (helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":43}}})) != null ? stack1 : "")
    + "\" -->\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "")
    + "<meta property=\"og:title\" content=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0.ogTitle : depth0),(depth0 != null ? depth0.title : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":62}}}))
    + "\">\n<meta name=\"twitter:title\" content=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0.twitterTitle : depth0),(depth0 != null ? depth0.title : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":9,"column":36},"end":{"line":9,"column":68}}}))
    + "\">\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "  <title>Editing: "
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),"New Page",{"name":"default","hash":{},"data":data,"loc":{"start":{"line":4,"column":18},"end":{"line":4,"column":48}}}))
    + "</title>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "  <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":9},"end":{"line":6,"column":20}}}) : helper)))
    + "</title>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "");
},"useData":true}
