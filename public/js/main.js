require.config({

  paths: {
    'backbone' : '../vendor/backbone/backbone',
    'paginator': '../vendor/backbone.paginator/lib/backbone.paginator',
    'marionette': '../vendor/marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr' : '../vendor/backbone.wreqr/lib/backbone.wreqr',
    'backbone.eventbinder' : '../vendor/backbone.eventbinder',
    'backbone.babysitter' : '../vendor/backbone.babysitter/lib/backbone.babysitter',
    'jquery' : '../vendor/jquery/dist/jquery',
    'underscore' : '../vendor/lodash/dist/lodash',
    'modernizr' : '../vendor/modernizr/modernizr',
    'handlebars' : '../vendor/handlebars/handlebars',
    'templateregistry' : 'app/templates',
    'moment': '../vendor/moment/moment',
    'bootstrap':  '../vendor/bootstrap/dist/js/bootstrap',
    'jquery-cookie': '../vendor/jquery-cookie/jquery.cookie',
    'localstorage': '../vendor/Backbone.localStorage/backbone.localStorage',
    'validation': '../vendor/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    'modernizr': {
      exports: 'Modernizr'
    },

    'handlebars': {
      exports: 'Handlebars'
    },

    'boostrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    },

    'paginator': {
      deps: ['backbone'],
      exports: 'Backbone.Paginator'
    }

  },

  waitSeconds: 30
});

require(
  [
    'jquery',
    'jquery-cookie',
    'app/application',
    'modernizr',
  ],
  function($, Cookie, Application, Modernizr) {
    'use strict';
    var token = $.cookie('token');

    if (token) {
      window.App = Application;
      Application.start();
    } else {
      location.href = './login.html';
    }

  }
);
