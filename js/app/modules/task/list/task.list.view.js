define(
  [
    'underscore',
    'jquery',
    'marionette',
    './task.item',
    './noresults.view'
  ],
  function(_, $, Marionette, TaskItem, NoResultsView) {
    'use strict';

    var TaskListView = Marionette.CompositeView.extend({
      template: 'task.list.hbs',
      tagName: 'div',
      className: 'columns',
      itemView: TaskItem,
      emptyView: NoResultsView
    });

    return TaskListView;
  }
);
