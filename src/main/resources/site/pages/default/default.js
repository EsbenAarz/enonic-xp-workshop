var thymeleaf = require('/lib/xp/thymeleaf');
var portal = require('/lib/xp/portal'); // Import the portal functions
var menu = require('/lib/enonic/menu/menu');

exports.get = function(req) {

  var site = portal.getSite();
  var content = portal.getContent();

  var menuItems = menu.getMenuTree(3);

  var siteConfig = site.data.siteConfig;

  var googleUATrackingId = siteConfig.config['googleUATrackingId'] || null;
  var facebookAppId = siteConfig.config['facebookAppId'] || null;

  // Head title
  var pageTitle = content['displayName'];

  var mainRegion   = content.page.regions["main"];
  var footerRegion = content.page.regions["footer"];

  var params = {
      siteTitle: site['displayName'],
      mainRegion: mainRegion,
      footerRegion: footerRegion,
      sitePath: site['_path'],
      googleUATrackingId: googleUATrackingId,
      facebookAppId: facebookAppId,
      menuItems: menuItems,
      pageTitle: pageTitle
  };

  var view = resolve('default.html');

  return {
    body: thymeleaf.render(view, params)
  }
};