window.kiln.componentTemplates['header']={"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <header data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":44}}}))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.componentVariation || (depth0 != null ? depth0.componentVariation : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"componentVariation","hash":{},"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":75}}}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.pageType || (depth0 != null ? depth0.pageType : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"pageType","hash":{},"data":data,"loc":{"start":{"line":2,"column":76},"end":{"line":2,"column":90}}}) : helper)))
    + "\" data-editable=\"settings\">\n  <div class=\"header-inner\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.logoUrl : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + "      <span class=\"header__title-logo\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isSVGString : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.logoUrl : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.tagline : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.enableSocialButtons : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n</header>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "    <a class=\"header__logo-link\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.logoUrl || (depth0 != null ? depth0.logoUrl : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logoUrl","hash":{},"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":50}}}) : helper)))
    + "\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "          "
    + ((stack1 = ((helper = (helper = helpers.siteLogo || (depth0 != null ? depth0.siteLogo : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteLogo","hash":{},"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "        <img class=\"header__logo\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.siteLogo || (depth0 != null ? depth0.siteLogo : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteLogo","hash":{},"data":data,"loc":{"start":{"line":11,"column":39},"end":{"line":11,"column":51}}}) : helper)))
    + "\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    </a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "    <p class=\"header__tagline\">"
    + container.escapeExpression(((helper = (helper = helpers.tagline || (depth0 != null ? depth0.tagline : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tagline","hash":{},"data":data,"loc":{"start":{"line":18,"column":31},"end":{"line":18,"column":42}}}) : helper)))
    + "</p>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"header__social-icons\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.shareServices : depth0)) != null ? stack1.facebook : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.shareServices : depth0)) != null ? stack1.twitter : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":41,"column":13}}})) != null ? stack1 : "")
    + "      </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <a\n          data-shareService=\"facebook\"\n          target=\"_blank\"\n          class=\"share-link facebook\"\n          title=\"Share on Facebook\"\n          aria-label=\"Share on Facebook\"\n        ><svg xmlns=\"http://www.w3.org/2000/svg\" role=\"presentation\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" preserveAspectRatio=\"xMinYMin meet\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#3E5C9B\" d=\"M5.4 0h25.2c3 0 5.4 2.4 5.4 5.4v25.2c0 3-2.4 5.4-5.4 5.4h-25.2c-3 0-5.4-2.4-5.4-5.4v-25.2c0-3 2.4-5.4 5.4-5.4z\"/><path fill=\"#fff\" d=\"M19.4 28v-9.2h4l.6-3.3h-4.6v-2.4c0-1.1.3-1.8 2-1.8h2.6v-3.1c-.4 0-1.1-.2-2.6-.2-3.1 0-5.7 1.8-5.7 5v2.5h-3.7v3.3h3.7v9.2h3.7z\"/></svg>\n<span>Share</span></a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "      <a\n        data-shareService=\"twitter\"\n        target=\"_blank\"\n        class=\"share-link twitter\"\n        title=\"Share on Twitter\"\n        aria-label=\"Share on Twitter\"\n        ><svg xmlns=\"http://www.w3.org/2000/svg\" role=\"presentation\" width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" preserveAspectRatio=\"xMinYMin meet\"><path d=\"M19.2 2.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.5.7-2.4.9-.7-.7-1.7-1.2-2.8-1.2-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.1-.2-5.9-1.7-7.8-3.9-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.1-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.5 2.6-1.3 1-2.9 1.6-4.7 1.6-.3 0-.6 0-.9-.1 1.7 1.1 3.6 1.7 5.8 1.7 6.9 0 10.7-5.7 10.7-10.7v-.5c.8-.4 1.5-1 2-1.8z\" fill=\"#28A9E1\" /></svg>\n<span>Tweet</span></a>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":49,"column":10}}})) != null ? stack1 : "");
},"useData":true}
