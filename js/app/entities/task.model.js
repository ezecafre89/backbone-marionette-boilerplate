define(
  [
    'jquery',
    'underscore',
    'backbone',
    'app/entities/session.model'
  ],
  function($, _, Backbone, Session) {
    'use strict';

    var TaskModel = Backbone.Model.extend({

      defaults: {
        name: '',
        description: '',
        status: '',
        creationDate: '',
        dueDate: ''
      }

    });

    return TaskModel;
  }
);