window.kiln.componentTemplates['recipe']={"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <div class=\"recipe\" data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":56}}}))
    + "\" data-editable=\"settings\">\n  <div class=\"recipe-status\">\n    <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":19}}}) : helper)))
    + "</h2>\n    <div class=\"recipe-info\">\n      <h4 class=\"recipe-vdivider\">"
    + alias4(((helper = (helper = helpers.madeit || (depth0 != null ? depth0.madeit : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"madeit","hash":{},"data":data,"loc":{"start":{"line":6,"column":34},"end":{"line":6,"column":46}}}) : helper)))
    + " made it</h4> <h4 class=\"recipe-vdivider\">"
    + alias4(((helper = (helper = helpers.reviews || (depth0 != null ? depth0.reviews : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"reviews","hash":{},"data":data,"loc":{"start":{"line":6,"column":88},"end":{"line":6,"column":101}}}) : helper)))
    + " reviews</h4> <h4>"
    + alias4(((helper = (helper = helpers.photos || (depth0 != null ? depth0.photos : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"photos","hash":{},"data":data,"loc":{"start":{"line":6,"column":119},"end":{"line":6,"column":131}}}) : helper)))
    + " photos</h4>\n      <h5>Recipe by: "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":33}}}) : helper)))
    + "</h5>\n    </div>\n    <p style=\"width: 80%;\" >"
    + alias4(((helper = (helper = helpers.recipeD || (depth0 != null ? depth0.recipeD : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"recipeD","hash":{},"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":41}}}) : helper)))
    + "</p>\n  </div>\n  <div class=\"recipe-imagew\">\n    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":28}}}) : helper)))
    + "\" class=\"recipe-image\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":61},"end":{"line":12,"column":75}}}) : helper)))
    + "\">\n    <div class=\"recipe-images-other\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":30}}}) : helper)))
    + "\" class=\"recipe-images\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":14,"column":64},"end":{"line":14,"column":78}}}) : helper)))
    + "\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":30}}}) : helper)))
    + "\" class=\"recipe-images\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":15,"column":64},"end":{"line":15,"column":78}}}) : helper)))
    + "\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":30}}}) : helper)))
    + "\" class=\"recipe-images\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":16,"column":64},"end":{"line":16,"column":78}}}) : helper)))
    + "\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":30}}}) : helper)))
    + "\" class=\"recipe-images\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":17,"column":64},"end":{"line":17,"column":78}}}) : helper)))
    + "\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":30}}}) : helper)))
    + "\" class=\"recipe-images\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":18,"column":64},"end":{"line":18,"column":78}}}) : helper)))
    + "\">\n    </div>\n  </div>\n</div>\n  \n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":55,"column":10}}})) != null ? stack1 : "");
},"useData":true}
