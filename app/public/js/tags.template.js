window.kiln.componentTemplates['tags']={"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return alias4((helpers.set||(depth0 && depth0.set)||alias3).call(alias2,(depth0 != null ? depth0.items : depth0),"invisibleTagsCount",0,{"name":"set","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":42}}}))
    + "<div class=\"tags\" data-uri=\""
    + alias4((helpers["default"]||(depth0 && depth0["default"])||alias3).call(alias2,(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"default","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":52}}}))
    + "\" data-editable=\"items\">"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":4,"column":2},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>\n\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "<h2 class=\"title\">Tags:</h2>\n    <ul class=\"tags-list\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":6},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":20,"column":6},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(helpers.compare||(depth0 && depth0.compare)||alias3).call(alias2,(helpers.subtract||(depth0 && depth0.subtract)||alias3).call(alias2,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.invisibleTagsCount : stack1),{"name":"subtract","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":22},"end":{"line":30,"column":70}}}),">",4,{"name":"compare","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":13},"end":{"line":30,"column":77}}}),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":30,"column":6},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + "</ul>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[0][0]) != null ? stack1.invisible : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":9,"column":8},"end":{"line":15,"column":17}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5=container.lambda;

  return alias4((helpers.set||(depth0 && depth0.set)||alias3).call(alias2,(depths[1] != null ? depths[1].items : depths[1]),"invisibleTagsCount",(helpers.add||(depth0 && depth0.add)||alias3).call(alias2,((stack1 = (depths[1] != null ? depths[1].items : depths[1])) != null ? stack1.invisibleTagsCount : stack1),1,{"name":"add","hash":{},"data":data,"loc":{"start":{"line":10,"column":47},"end":{"line":10,"column":82}}}),{"name":"set","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":85}}}))
    + "\n          <li class=\"tags-list-item "
    + alias4(helpers["if"].call(alias2,((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.edit),"invisible-in-edit-mode",{"name":"if","hash":{"else":"invisible"},"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":11,"column":104}}}))
    + "\">\n            <a href=\"//"
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site)) && stack1.host), depth0))
    + "/tags/"
    + alias4((helpers.urlencode||(depth0 && depth0.urlencode)||alias3).call(alias2,(helpers.replace||(depth0 && depth0.replace)||alias3).call(alias2,((stack1 = blockParams[1][0]) != null ? stack1.text : stack1)," ","-",{"name":"replace","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":12,"column":70},"end":{"line":12,"column":96}}}),{"name":"urlencode","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":99}}}))
    + "/\"\n             class=\"tags-link\">"
    + alias4(alias5(((stack1 = blockParams[1][0]) != null ? stack1.text : stack1), depth0))
    + "</a>\n          </li>";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[0][0]) != null ? stack1.invisible : stack1),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":21,"column":8},"end":{"line":27,"column":21}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5=container.lambda;

  return alias4((helpers.set||(depth0 && depth0.set)||alias3).call(alias2,"encodedTag",(helpers.replace||(depth0 && depth0.replace)||alias3).call(alias2,(helpers.urlencode||(depth0 && depth0.urlencode)||alias3).call(alias2,(helpers.replace||(depth0 && depth0.replace)||alias3).call(alias2,(helpers.trim||(depth0 && depth0.trim)||alias3).call(alias2,(helpers.lowercase||(depth0 && depth0.lowercase)||alias3).call(alias2,((stack1 = blockParams[1][0]) != null ? stack1.text : stack1),{"name":"lowercase","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":65},"end":{"line":22,"column":85}}}),{"name":"trim","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":59},"end":{"line":22,"column":86}}})," ","-",{"name":"replace","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":50},"end":{"line":22,"column":95}}}),{"name":"urlencode","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":39},"end":{"line":22,"column":96}}}),"%2F","/",{"name":"replace","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":30},"end":{"line":22,"column":107}}}),{"name":"set","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":10},"end":{"line":22,"column":110}}}))
    + "\n          <li class=\"tags-list-item"
    + ((stack1 = (helpers.ifAll||(depth0 && depth0.ifAll)||alias3).call(alias2,(helpers.compare||(depth0 && depth0.compare)||alias3).call(alias2,(helpers.subtract||(depth0 && depth0.subtract)||alias3).call(alias2,(data && data.index),((stack1 = (depths[1] != null ? depths[1].items : depths[1])) != null ? stack1.invisibleTagsCount : stack1),{"name":"subtract","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":54},"end":{"line":23,"column":99}}}),">",3,{"name":"compare","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":45},"end":{"line":23,"column":106}}}),(helpers.compare||(depth0 && depth0.compare)||alias3).call(alias2,(helpers.subtract||(depth0 && depth0.subtract)||alias3).call(alias2,((stack1 = (depths[1] != null ? depths[1].items : depths[1])) != null ? stack1.length : stack1),((stack1 = (depths[1] != null ? depths[1].items : depths[1])) != null ? stack1.invisibleTagsCount : stack1),{"name":"subtract","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":116},"end":{"line":23,"column":170}}}),">",4,{"name":"compare","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":107},"end":{"line":23,"column":177}}}),{"name":"ifAll","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":23,"column":35},"end":{"line":23,"column":197}}})) != null ? stack1 : "")
    + "\">\n            <a aria-label=\"More articles tagged "
    + alias4(alias5(((stack1 = blockParams[1][0]) != null ? stack1.text : stack1), depth0))
    + "\" href=\"//"
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locals)) && stack1.site)) && stack1.host), depth0))
    + "/tags/"
    + alias4(((helper = (helper = helpers.encodedTag || (depth0 != null ? depth0.encodedTag : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"encodedTag","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":106},"end":{"line":24,"column":122}}}) : helper)))
    + "/\"\n              class=\"tags-link\">"
    + alias4(alias5(((stack1 = blockParams[1][0]) != null ? stack1.text : stack1), depth0))
    + "</a>,\n          </li>";
},"8":function(container,depth0,helpers,partials,data) {
    return " hidden";
},"10":function(container,depth0,helpers,partials,data) {
    return "<li class=\"tags-list-item\">\n          <a aria-label=\"More tags\" class=\"tags-link more\" href=\"#\">More</a>\n        </li>";
},"12":function(container,depth0,helpers,partials,data) {
    return "  <!-- unable to render partial app without a supplied context -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.ifAny||(depth0 && depth0.ifAny)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._ref : depth0),(depth0 != null ? depth0._self : depth0),{"name":"ifAny","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data,"blockParams":blockParams,"loc":{"start":{"line":1,"column":0},"end":{"line":41,"column":10}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true,"useBlockParams":true}
