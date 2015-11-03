var thymeleaf = require('/lib/xp/thymeleaf');
var portal = require('/lib/xp/portal'); // Import the portal functions

exports.get = function(req) {

  var component = portal.getComponent();

  var classes = "outer columns four";

  var params = {
    component: component,
    oneRegion: component.regions["one"],
    twoRegion: component.regions["two"],
    threeRegion: component.regions["three"],
    fourRegion: component.regions["four"],
    classes: classes
  };

  var view = resolve('./four-columns.html');

  return {
    body: thymeleaf.render(view, params)
  };
};