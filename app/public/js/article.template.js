window.kiln.componentTemplates['article']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <article data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":21},"end":{"line":2,"column":45}}}))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.componentVariation || (depth0 != null ? depth0.componentVariation : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"componentVariation","hash":{},"data":data,"loc":{"start":{"line":2,"column":54},"end":{"line":2,"column":78}}}) : helper)))
    + alias4(helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit)," editing",{"name":"if","hash":{},"data":data,"loc":{"start":{"line":2,"column":78},"end":{"line":2,"column":115}}}))
    + "\" role=\"main\">\n  <header class=\"article-header\">\n    <div class=\"lede-wrapper\">\n      <div class=\"primary-area\">\n        <div class=\"article-header-section\">\n          <time class=\"article-timestamp\" datetime=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":8,"column":52},"end":{"line":8,"column":62}}}) : helper)))
    + "\" itemprop=\"datePublished\" data-editable=\"publishedDate\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "          </time>\n        </div>\n        <div class=\"article-header-section\">\n          <h1 class=\"headline-primary\" data-editable=\"headline\" itemprop=\"headline\">"
    + ((stack1 = ((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"headline","hash":{},"data":data,"loc":{"start":{"line":19,"column":84},"end":{"line":19,"column":100}}}) : helper))) != null ? stack1 : "")
    + "</h1>\n          <div class=\"bylines\">\n            <span data-editable=\"bylines\" class=\"primary-bylines\">\n              "
    + ((stack1 = (helpers.byline||(depth0 && depth0.byline)||alias3).call(alias2,{"name":"byline","hash":{"bylines":(depth0 != null ? depth0.byline : depth0)},"data":data,"loc":{"start":{"line":23,"column":14},"end":{"line":23,"column":43}}})) != null ? stack1 : "")
    + "\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <section class=\"body\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":44,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"article-content\" data-editable=\"content\" itemprop=\"articleBody\">\n"
    + ((stack1 = helpers.unless.call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":59,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":61,"column":6},"end":{"line":65,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n\n"
    + ((stack1 = container.invokePartial(partials.tags,(depth0 != null ? depth0.tags : depth0),{"name":"tags","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </section>\n</article>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.dateUpdated : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":14},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "              <span class=\"article-date\">"
    + container.escapeExpression((helpers.articleTimestamp||(depth0 && depth0.articleTimestamp)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"articleTimestamp","hash":{},"data":data,"loc":{"start":{"line":13,"column":41},"end":{"line":13,"column":68}}}))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"article-update\">Updated </span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "      <div class=\"lede-image-wrapper\" data-editable=\"lede\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ledeUrl : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":42,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "          <img src=\""
    + alias5(((helper = (helper = helpers.ledeUrl || (depth0 != null ? depth0.ledeUrl : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"ledeUrl","hash":{},"data":data,"loc":{"start":{"line":34,"column":20},"end":{"line":34,"column":33}}}) : helper)))
    + "\" class=\"lede-image\" data-src=\""
    + alias5(((helper = (helper = helpers.ledeUrl || (depth0 != null ? depth0.ledeUrl : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"ledeUrl","hash":{},"data":data,"loc":{"start":{"line":34,"column":64},"end":{"line":34,"column":77}}}) : helper)))
    + "\" alt=\""
    + alias5(((helper = (helper = helpers.ledeAlt || (depth0 != null ? depth0.ledeAlt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"ledeAlt","hash":{},"data":data,"loc":{"start":{"line":34,"column":84},"end":{"line":34,"column":97}}}) : helper)))
    + "\"/>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.ledeCaption : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":41,"column":17}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "            <div class=\"lede-image-data\">\n              <div class=\"attribution\">\n                "
    + ((stack1 = ((helper = (helper = helpers.ledeCaption || (depth0 != null ? depth0.ledeCaption : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ledeCaption","hash":{},"data":data,"loc":{"start":{"line":38,"column":16},"end":{"line":38,"column":35}}}) : helper))) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "      <div class=\"lede-image-wrapper\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ledeUrl : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":8},"end":{"line":57,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = container.invokePartial(partials["component-list"],(depth0 != null ? depth0.content : depth0),{"name":"component-list","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = container.invokePartial(partials["component-list"],(helpers.addAnnotatedTextAria||(depth0 && depth0.addAnnotatedTextAria)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"addAnnotatedTextAria","hash":{},"data":data,"loc":{"start":{"line":64,"column":27},"end":{"line":64,"column":57}}}),{"name":"component-list","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":75,"column":10}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true}
