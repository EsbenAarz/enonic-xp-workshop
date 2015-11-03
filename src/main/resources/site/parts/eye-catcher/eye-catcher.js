var thymeleaf = require('/lib/xp/thymeleaf');
var portal = require('/lib/xp/portal'); // Import the portal functions
var utilities = require('/lib/utilities.js'); // Import our own utility functions
var util = require('/lib/enonic/util/util');


exports.get = function(req) {
  var component = portal.getComponent();
  var config = component.config;

  var baseClasses = "outer eyecatcher fixed";
  util.log(config);
  var heading       = config.heading;
  var linkText      = config.linkText;
  var imgUrl        = portal.imageUrl({id: config.image, scale: '(1,1)'}); // scale: '(1,1)' betyr ingen skalering/orginalt bilde
  var url           = utilities.getLinkUrl(config.linkPage, config.linkUrl, null);
  var classes       = config.fullHeight ? baseClasses+" full-height" : baseClasses;

  var params = {
    heading: heading,
    linkText: linkText,
    url: url,
    imgUrl: imgUrl,
    classes: classes
  };
  util.log(params);
  var view = resolve('eye-catcher.html');

  return {
    body: thymeleaf.render(view, params)
  }
};