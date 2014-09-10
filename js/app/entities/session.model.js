define(
  [
    'backbone',
    'underscore',
    'jquery',
    'jquery-cookie'
  ],
  function(Backbone, _, $) {
    'use strict';

    var SessionModel = Backbone.Model.extend({
      defaults: {
        token: ''
      },

      initialize: function() {
        var token = $.cookie('token');

        if (token) {
          this.tokenSetup(token);
        }
      },

      tokenSetup: function(token) {
        this.set('token', token);

        $.ajaxSetup({
          headers: {
            'token': token
          }
        });
      },

      saveSession: function(token) {
        $.cookie('token', token);
        this.tokenSetup(token);
      },

      removeSession: function(token) {
        $.removeCookie('token');
      }

    });

    return new SessionModel();

  }
);