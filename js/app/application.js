define(
  [
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'templateregistry',
    'moment',
    './router'
  ],
  function(jQuery, _, Backbone, Marionette, Handlebars, JST, Moment, Router) {
    'use strict';

    var Application = new Marionette.Application();

    Application.on('initialize:before', function(options) {
      Marionette.Renderer.render = function(template, data){
        if (!JST[template]) {
          throw "Template '" + template + "' not found!";
        }
        return JST[template](data);
      };
    });

    Application.on('initialize:before', function(options) {
      Handlebars.registerHelper('ifCond', function(v1, v2, opts) {
        if(v1 === v2) {
          return opts.fn(this);
        }
        return opts.inverse(this);
      });

      Handlebars.registerHelper('parseDate', function(strDate, opts) {
        return new Moment(strDate).format('YYYY/MM/DD');
      });

      Handlebars.registerHelper('toLowerCase', function(strInput, opts) {
        return strInput.toLowerCase();
      });

      Handlebars.registerHelper('times', function(n, block) {
        var accum = '';

        for (var i = 1 ; i <= n; ++i) {
          accum += block.fn(i);
        }
        return accum;
      });

    });

    Application.on('initialize:after', function(options) {
      var ModalRegion = Backbone.Marionette.Region.extend({
        el: '#modalRegion',
        onShow: function(view) {
          this.$el.modal('show');
        },
        onClose: function() {
          this.$el.modal('hide');
        }
      });

      Application.addRegions({
        contentRegion: '#contentRegion',
        headerRegion: '#headerRegion',
        modalRegion: ModalRegion,
      });
    });

    Application.on('initialize:after', function(options) {
      var router = new Router();
      router.navigate('todo', { trigger: true });
    });

    return Application;
  }
);
