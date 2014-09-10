define(
  [
    'jquery',
    'backbone',
    './modules/task/task.controller',
    './modules/header/header.controller'
  ],
  function($, Backbone, ToDoController, HeaderController) {
    'use strict';

    var Router = Backbone.Router.extend({

      routes: {
        'todo': 'showToDoPage'
      },

      /**
       * [initialize description]
       * @return {[type]} [description]
       */
      initialize: function() {
        Backbone.history.start();
      },

      /**
       * [showProductPage description]
       * @return {[type]} [description]
       */
      showToDoPage: function() {
        var toDoController = new ToDoController({ router: this });
        var headerController = new HeaderController({ router: this });

        toDoController.show();
        headerController.show();
      }

    });

    return Router;
  }
);
