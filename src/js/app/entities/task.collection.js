define(
  [
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    '../entities/task.model'
  ],
  function($, _, Backbone, localStorage, TaskModel) {
    'use strict';

    var TaskCollection = Backbone.Collection.extend({

      localStorage: new Backbone.LocalStorage("TaskCollection"),
      model: TaskModel

    });

    return TaskCollection;

  }
);
