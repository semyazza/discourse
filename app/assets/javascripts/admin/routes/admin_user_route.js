(function() {

  /**
    Handles routes related to users in the admin section.

    @class AdminUserRoute    
    @extends Discourse.Route
    @namespace Discourse
    @module Discourse
  **/
  Discourse.AdminUserRoute = Discourse.Route.extend({
    model: function(params) {
      return Discourse.AdminUser.find(params.username);
    },

    renderTemplate: function() {
      this.render('admin/templates/user', {into: 'admin/templates/admin'});
    }

  });

}).call(this);
