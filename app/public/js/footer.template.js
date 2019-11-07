window.kiln.componentTemplates['footer']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "  <div data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":41}}}))
    + "\" class=\"footer\" data-editable=\"settings\">\n\n  <ul class=\"footer-social\" data-editable=\"footerLinks\">\n"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.footerLinks : depth0),{"name":"component-list","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </ul>\n\n  <div class=\"copyright\">\n    Built in "
    + alias4((helpers.moment||(depth0 && depth0.moment)||alias3).call(alias2,"now","YYYY",{"name":"moment","hash":{},"data":data,"loc":{"start":{"line":9,"column":13},"end":{"line":9,"column":38}}}))
    + " with Clay\n  </div>\n</div>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":10}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true}
