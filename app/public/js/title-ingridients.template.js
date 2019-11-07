window.kiln.componentTemplates['title-ingridients']={"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div  data-uri=\""
    + container.escapeExpression((helpers["default"]||(depth0 && depth0["default"])||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":42}}}))
    + "\" data-editable=\"settings\">\n      <div class=\"title-ingridients-options\">\n              <button class=\"title-ingridients-options-button\">Save</button>\n              <button class=\"title-ingridients-options-button\">I made it</button>\n              <button class=\"title-ingridients-options-button\"> Rate it</button>\n              <button class=\"title-ingridients-options-button\">Print</button>\n              <button class=\"title-ingridients-options-button\">Pin</button>\n              <button class=\"title-ingridients-options-button\">Share</button>\n      </div>\n      <div class=\"title-ingridients\">\n                <div class=\"title-ingridients-title\">\n                      "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":13,"column":22},"end":{"line":13,"column":63}}})) != null ? stack1 : "")
    + "\n                </div>\n                <div class=\"title-ingridients-feat\">\n                        "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.time : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":117}}})) != null ? stack1 : "")
    + "\n                        "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.servings : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":17,"column":24},"end":{"line":17,"column":124}}})) != null ? stack1 : "")
    + "\n                        "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.calories : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":18,"column":24},"end":{"line":18,"column":97}}})) != null ? stack1 : "")
    + "\n                </div>\n      </div>\n      <div class=\"title-ingridients-divider\">\n              <div class=\"title-ingridients-list\">\n                <ul>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":24},"end":{"line":26,"column":33}}})) != null ? stack1 : "")
    + "                </ul>\n                </div>\n                <div class=\"title-ingridients-check\">\n                        <div class=\"title-ingdrients-sale\">\n                                <H2>On Sale</H2>\n                                <h6>What's on sale near you.</h6>\n                        </div>\n                        <div class=\"title-ingdrients-settings\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitches\">\n                        <label class=\"custom-control-label\" for=\"customSwitches\"> <i></i> Setting</label>\n                        </div>\n\n\n                </div>\n      </div>\n</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<h2 >"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":40},"end":{"line":13,"column":51}}}) : helper)))
    + "</h2>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " <h3 class=\"feature title-ingridients-vdivider\">Cook time: "
    + container.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"time","hash":{},"data":data,"loc":{"start":{"line":16,"column":95},"end":{"line":16,"column":105}}}) : helper)))
    + "</h3>";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " <h3 class=\"feature title-ingridients-vdivider\">Servings: "
    + container.escapeExpression(((helper = (helper = helpers.servings || (depth0 != null ? depth0.servings : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"servings","hash":{},"data":data,"loc":{"start":{"line":17,"column":98},"end":{"line":17,"column":112}}}) : helper)))
    + "</h3>";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " <h3 class=\"feature\">Calories: "
    + container.escapeExpression(((helper = (helper = helpers.calories || (depth0 != null ? depth0.calories : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"calories","hash":{},"data":data,"loc":{"start":{"line":18,"column":71},"end":{"line":18,"column":85}}}) : helper)))
    + "</h3>";
},"10":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[0][0]) != null ? stack1.ingridients : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":25,"column":24},"end":{"line":25,"column":101}}})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<li><span>"
    + ((stack1 = container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.ingridients : stack1), depth0)) != null ? stack1 : "")
    + "</span></li>";
},"13":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.program(13, data, 0, blockParams),"data":data,"blockParams":blockParams,"loc":{"start":{"line":1,"column":0},"end":{"line":46,"column":10}}})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true}
