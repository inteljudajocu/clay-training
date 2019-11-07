window.kiln.componentTemplates['explore']={"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5="function";

  return "  <div class=\"explore\" data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":57}}}))
    + "\" data-editable=\"settings\">\n    <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":19}}}) : helper)))
    + "</h2>\n    <div class=\"explore-recipe\">\n        <ul class=\"explore-recipe-mul\" >\n            <li>\n                <div class=\"explore-recipe-single\">\n                    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":30},"end":{"line":8,"column":44}}}) : helper)))
    + "\" class=\"explore-image\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":92}}}) : helper)))
    + "\">\n                    <h5>"
    + alias4(((helper = (helper = helpers.recipename || (depth0 != null ? depth0.recipename : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"recipename","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":40}}}) : helper)))
    + "</h5>\n                    <div class=\"explore-score\">\n                        <h6>"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":11,"column":39}}}) : helper)))
    + " </h6>\n                        <h6> "
    + alias4(((helper = (helper = helpers.reviews || (depth0 != null ? depth0.reviews : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"reviews","hash":{},"data":data,"loc":{"start":{"line":12,"column":29},"end":{"line":12,"column":42}}}) : helper)))
    + "</h6>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"explore-recipe-single\">\n                    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":18,"column":30},"end":{"line":18,"column":44}}}) : helper)))
    + "\" class=\"explore-image\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":18,"column":78},"end":{"line":18,"column":92}}}) : helper)))
    + "\">\n                    <h5>"
    + alias4(((helper = (helper = helpers.recipename || (depth0 != null ? depth0.recipename : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"recipename","hash":{},"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":19,"column":40}}}) : helper)))
    + "</h5>\n                    <div class=\"explore-score\">\n                        <h6>"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":21,"column":28},"end":{"line":21,"column":39}}}) : helper)))
    + " </h6>\n                        <h6> "
    + alias4(((helper = (helper = helpers.reviews || (depth0 != null ? depth0.reviews : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"reviews","hash":{},"data":data,"loc":{"start":{"line":22,"column":29},"end":{"line":22,"column":42}}}) : helper)))
    + "</h6>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"explore-recipe-single\">\n                    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":28,"column":30},"end":{"line":28,"column":44}}}) : helper)))
    + "\" class=\"explore-image\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":28,"column":78},"end":{"line":28,"column":92}}}) : helper)))
    + "\">\n                    <h5>"
    + alias4(((helper = (helper = helpers.recipename || (depth0 != null ? depth0.recipename : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"recipename","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":40}}}) : helper)))
    + "</h5>\n                    <div class=\"explore-score\">\n                        <h6>"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":31,"column":28},"end":{"line":31,"column":39}}}) : helper)))
    + " </h6>\n                        <h6> "
    + alias4(((helper = (helper = helpers.reviews || (depth0 != null ? depth0.reviews : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"reviews","hash":{},"data":data,"loc":{"start":{"line":32,"column":29},"end":{"line":32,"column":42}}}) : helper)))
    + "</h6>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"explore-recipe-single\">\n                    <img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":38,"column":30},"end":{"line":38,"column":44}}}) : helper)))
    + "\" class=\"explore-image\" data-src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":38,"column":78},"end":{"line":38,"column":92}}}) : helper)))
    + "\">\n                    <h5>"
    + alias4(((helper = (helper = helpers.recipename || (depth0 != null ? depth0.recipename : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"recipename","hash":{},"data":data,"loc":{"start":{"line":39,"column":24},"end":{"line":39,"column":40}}}) : helper)))
    + "</h5>\n                    <div class=\"explore-score\">\n                        <h6>"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":41,"column":28},"end":{"line":41,"column":39}}}) : helper)))
    + " </h6>\n                        <h6> "
    + alias4(((helper = (helper = helpers.reviews || (depth0 != null ? depth0.reviews : depth0)) != null ? helper : alias3),(typeof helper === alias5 ? helper.call(alias2,{"name":"reviews","hash":{},"data":data,"loc":{"start":{"line":42,"column":29},"end":{"line":42,"column":42}}}) : helper)))
    + "</h6>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":51,"column":10}}})) != null ? stack1 : "");
},"useData":true}
