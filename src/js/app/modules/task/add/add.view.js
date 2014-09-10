define(
  [
    'underscore',
    'jquery',
    'marionette',
    'validation'
  ],
  function(_, $, Marionette) {
    'use strict';

    var AddView = Marionette.ItemView.extend({
      template: 'add.hbs',
      className: 'filters',
      events: {
        //'click .js-addTask': 'addTask'
      },

      ui: {
        nameField: '.js-name',
        descField: '.js-desc',
        dueDateField: '.js-dueDate'
      },

      /**
       * [initialize description]
       * @return {[type]} [description]
       */
      initialize: function() {
        _.bindAll(this);
      },

      /**
       * [onRender description]
       * @return {[type]} [description]
       */
      onRender: function() {
        this.attachValidation();
      },

      /**
       * [attachValidation description]
       * @return {[type]} [description]
       */
      attachValidation: function() {
        var that = this;

        this.$el.find('input,textarea,select').jqBootstrapValidation({
          preventSubmit: true,
          submitSuccess: function($form, event) {
            event.preventDefault();
            that.addTask(event);
          },
          filter: function() {
            return $(this).is(':visible');
          }
        });
      },

      /**
       * [addTask description]
       * @return {[type]} [description]
       */
      addTask: function(event) {
        event.preventDefault();

        this.trigger('task:add', {
          name: this.ui.nameField.val(),
          description: this.ui.descField.val(),
          dueDate: this.ui.dueDateField.val(),
          status: 'ToDo',
          creationDate: Date.now()
        });

        this.ui.nameField.val('');
        this.ui.descField.val('');
        this.ui.dueDateField.val('');
      }

    });

    return AddView;
  }
);
