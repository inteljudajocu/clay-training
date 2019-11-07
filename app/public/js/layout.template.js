window.kiln.componentTemplates['layout']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "  <!DOCTYPE html>\n<html lang=\"en\" data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":50}}}))
    + "\" data-layout-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._layoutRef : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":3,"column":69},"end":{"line":3,"column":98}}}))
    + "\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,shrink-to-fit=no\">\n"
    + ((stack1 = helpers.unless.call(alias2,(helpers.includes||(depth0 && depth0.includes)||alias3).call(alias2,(helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":8,"column":24},"end":{"line":8,"column":44}}}),"@published",{"name":"includes","hash":{},"data":data,"loc":{"start":{"line":8,"column":14},"end":{"line":8,"column":58}}}),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + "\n    <!-- data-editable=\"head\" -->\n"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.head : depth0),{"name":"component-list","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <!-- data-editable-end -->\n    <!-- data-editable=\"headLayout\" -->\n"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.headLayout : depth0),{"name":"component-list","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <!-- data-editable-end -->\n  </head>\n  <body class=\"layout\">\n    <section class=\"top\" data-editable=\"top\" data-track-zone=\"top\">"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.top : depth0),{"name":"component-list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</section>\n    <section class=\"wrapper\">\n      <section class=\"main\" data-editable=\"main\" data-track-zone=\"main\">"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.main : depth0),{"name":"component-list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</section>\n    </section>\n    <footer class=\"bottom\" data-editable=\"bottom\" data-track-zone=\"bottom\">"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.bottom : depth0),{"name":"component-list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>\n    <div class=\"kiln-internals\" data-editable=\"kilnInternals\">"
    + ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.kilnInternals : depth0),{"name":"component-list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n  </body>\n</html>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <meta name=\"robots\" content=\"noindex\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":33,"column":10}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true}
