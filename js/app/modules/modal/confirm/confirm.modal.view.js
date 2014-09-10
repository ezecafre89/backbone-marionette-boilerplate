define(
  [
    'underscore',
    'jquery',
    'marionette',
    'templateregistry',
    'bootstrap'
  ],
  function(_, $, Marionette, JST) {
    'use strict';

    var ProductItemView = Marionette.ItemView.extend({
      template: 'confirm.modal.hbs',
      tagName: 'div',
      className: 'modal-dialog',
      events: {
        'click .js-confirm': 'confirmAction',
        'click .js-cancel': 'cancelAction'
      },

      /**
       * [initialize description]
       * @return {[type]} [description]
       */
      initialize: function(options) {
        _.bindAll(this);

        this.title = options.title;
        this.question = options.question;
        this.confirmCallback = options.confirm;
        this.cancelCallback = options.cancel;
      },

      render: function() {
        var html = JST[this.template]({
          title: this.title,
          question: this.question
        });

        return this.$el.html(html);
      },

      /**
       * [confirmAction description]
       * @param  {[type]} e [description]
       * @return {[type]}   [description]
       */
      confirmAction: function(e) {
        if (this.confirmCallback) {
          this.confirmCallback();
        }
      },

      /**
       * [cancelAction description]
       * @param  {[type]} e [description]
       * @return {[type]}   [description]
       */
      cancelAction: function(e) {
        if (this.cancelCallback) {
          this.cancelCallback();
        }
      }

    });

    return ProductItemView;
  }
);
