window.kiln.componentTemplates['image']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div data-uri=\""
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":41}}}))
    + "\" class=\"image-cmpt\" data-editable=\"settings\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageUrl : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":30,"column":9}}})) != null ? stack1 : "")
    + "</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function";

  return "    <div class=\"image-container "
    + alias3(helpers["if"].call(alias2,(depth0 != null ? depth0.imageBorderToggle : depth0),"bordered",{"name":"if","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":69}}}))
    + "\">\n      <div class=\"img-figure\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.clickUrl : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":8,"column":15}}})) != null ? stack1 : "")
    + "          <div class=\"image-wrapper\">\n            <img src=\""
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":22},"end":{"line":10,"column":36}}}) : helper)))
    + "\" class=\"img-data\" data-src=\""
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":65},"end":{"line":10,"column":79}}}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.imageAlt || (depth0 != null ? depth0.imageAlt : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageAlt","hash":{},"data":data,"loc":{"start":{"line":10,"column":86},"end":{"line":10,"column":100}}}) : helper)))
    + "\"/>\n          </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.clickUrl : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n      <script type=\"application/ld+json\">\n        {\n          \"@context\": \"http://schema.org\",\n          \"@type\": \"ImageObject\",\n          "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageCredit : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":10},"end":{"line":20,"column":82}}})) != null ? stack1 : "")
    + "\n          "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageCaption : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":85}}})) != null ? stack1 : "")
    + "\n          \"contentUrl\": \""
    + alias3(container.lambda((depth0 != null ? depth0.imageUrl : depth0), depth0))
    + "\"\n        }\n      </script>\n    </div>\n    <div itemprop=\"caption\" class=\"image-cmpt-figcaption attribution\">\n      "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageCaption : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":53}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.imageCredit : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":138}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "          <a class=\"image-link\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.clickUrl || (depth0 != null ? depth0.clickUrl : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clickUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":38},"end":{"line":7,"column":50}}}) : helper)))
    + "\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "          </a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "\"author\": \""
    + container.escapeExpression((helpers.toPlainText||(depth0 && depth0.toPlainText)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.imageCredit : depth0),{"name":"toPlainText","hash":{},"data":data,"loc":{"start":{"line":20,"column":42},"end":{"line":20,"column":73}}}))
    + "\",";
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "\"caption\": \""
    + container.escapeExpression((helpers.toPlainText||(depth0 && depth0.toPlainText)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.imageCaption : depth0),{"name":"toPlainText","hash":{},"data":data,"loc":{"start":{"line":21,"column":44},"end":{"line":21,"column":76}}}))
    + "\",";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.imageCaption || (depth0 != null ? depth0.imageCaption : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"imageCaption","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":46}}}) : helper))) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "<span class=\"credit\">"
    + container.escapeExpression((helpers.capitalizeAll||(depth0 && depth0.capitalizeAll)||alias3).call(alias2,helpers["if"].call(alias2,(depth0 != null ? depth0.imageType : depth0),(depth0 != null ? depth0.imageType : depth0),{"name":"if","hash":{"else":"Photo"},"data":data,"loc":{"start":{"line":28,"column":63},"end":{"line":28,"column":100}}}),{"name":"capitalizeAll","hash":{},"data":data,"loc":{"start":{"line":28,"column":46},"end":{"line":28,"column":103}}}))
    + ": "
    + ((stack1 = ((helper = (helper = helpers.imageCredit || (depth0 != null ? depth0.imageCredit : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"imageCredit","hash":{},"data":data,"loc":{"start":{"line":28,"column":105},"end":{"line":28,"column":124}}}) : helper))) != null ? stack1 : "")
    + "</span>";
},"15":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":35,"column":10}}})) != null ? stack1 : "");
},"useData":true}
