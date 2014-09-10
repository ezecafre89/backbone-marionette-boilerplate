define(
  [
    'jquery',
    'underscore',
    'marionette',
    'templateregistry',
    'app/entities/session.model'
  ],
  function($, _, Marionette, JST, Session) {
    'use strict';

    var HeaderView = Marionette.ItemView.extend({
      template: 'header.hbs',
      events: {
        'click .logout': 'doLogout'
      },

      /**
       * [doLogout description]
       * @return {[type]} [description]
       */
      doLogout: function() {
        this.trigger('header:logout');
      }

    });

    return HeaderView;
  }
);
