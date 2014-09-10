define(
  [
    'underscore',
    'jquery',
    'marionette',
    'app/entities/session.model',
    'bootstrap'
  ],
  function(_, $, Marionette, Session) {
    'use strict';

    var TaskItemView = Marionette.ItemView.extend({
      template: 'task.item.hbs',
      tagName: 'div',
      className: 'pin',
      events: {
        'click .js-finishTask': 'finishTask',
        'click .js-removeTask': 'removeTask',
      },

      /**
       * [initialize description]
       * @return {[type]} [description]
       */
      initialize: function() {
        _.bindAll(this);
        this.model.on('change', this.render);
        $('.tooltiped').tooltip();
      },

      /**
       * [approveItem description]
       * @return {[type]} [description]
       */
      finishTask: function(e) {
        e.preventDefault();
        this.trigger('task:finished', this.model);
      },

      /**
       * [removeItem description]
       * @return {[type]} [description]
       */
      removeTask: function(e) {
        e.preventDefault();
        this.trigger('task:remove', this.model);
      }

    });

    return TaskItemView;
  }
);
