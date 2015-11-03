var thymeleaf = require('/lib/xp/thymeleaf');
var portal = require('/lib/xp/portal'); // Import the portal functions

exports.get = function(req) {

  var component = portal.getComponent();
  var classes = "outer columns three";

  var params = {
    component: component,
    leftRegion: component.regions["left"],
    centerRegion: component.regions["center"],
    rightRegion: component.regions["right"],
    classes: classes
  };

  var view = resolve('./focus-boxes.html');

  return {
    body: thymeleaf.render(view, params)
  };
};