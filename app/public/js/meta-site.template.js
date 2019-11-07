window.kiln.componentTemplates['meta-site']={"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <!-- data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":41}}}))
    + "\" -->\n<meta name=\"twitter:site\" content=\""
    + alias4(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"twitter","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":48}}}) : helper)))
    + "\">\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/"
    + alias4(((helper = (helper = helpers.facebook || (depth0 != null ? depth0.facebook : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"facebook","hash":{},"data":data,"loc":{"start":{"line":4,"column":69},"end":{"line":4,"column":83}}}) : helper)))
    + "\">\n<meta property=\"fb:app_id\" content=\""
    + alias4(((helper = (helper = helpers.facebookID || (depth0 != null ? depth0.facebookID : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"facebookID","hash":{},"data":data,"loc":{"start":{"line":5,"column":36},"end":{"line":5,"column":52}}}) : helper)))
    + "\">\n<meta property=\"og:site_name\" content=\""
    + alias4(((helper = (helper = helpers.siteName || (depth0 != null ? depth0.siteName : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":6,"column":39},"end":{"line":6,"column":53}}}) : helper)))
    + "\">\n<meta property=\"og:type\" content=\""
    + alias4(((helper = (helper = helpers.ogType || (depth0 != null ? depth0.ogType : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"ogType","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":46}}}) : helper)))
    + "\">\n<meta name=\"type\" content=\""
    + alias4(((helper = (helper = helpers.pageType || (depth0 != null ? depth0.pageType : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"pageType","hash":{},"data":data,"loc":{"start":{"line":8,"column":27},"end":{"line":8,"column":41}}}) : helper)))
    + "\">\n<meta name=\"vertical\" content=\""
    + alias4(((helper = (helper = helpers.vertical || (depth0 != null ? depth0.vertical : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"vertical","hash":{},"data":data,"loc":{"start":{"line":9,"column":31},"end":{"line":9,"column":45}}}) : helper)))
    + "\">\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":10}}})) != null ? stack1 : "");
},"useData":true}
