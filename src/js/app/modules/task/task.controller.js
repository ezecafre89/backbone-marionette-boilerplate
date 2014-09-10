define(
  [
    'jquery',
    'underscore',
    'marionette',
    './layout/task.layout.view',
    './list/task.list.view',
    './add/add.view',
    './search/search.view',
    '../modal/confirm/confirm.modal.view',
    'app/entities/task.model',
    'app/entities/task.collection',
    'app/entities/session.model'
  ],
  function($, _,  Marionette, TaskLayout, TaskListView, AddTaskView, SearchView,
    ConfirmModal, TaskModel, TaskCollection, Session) {
    'use strict';

    var TaskController = Marionette.Controller.extend({

      /**
       * [initialize description]
       * @param  {[type]} options [description]
       * @return {[type]}         [description]
       */
      initialize: function(options) {
        this.router = options.router;
      },

      /**
       * [show description]
       * @param  {[type]} options [description]
       * @return {[type]}         [description]
       */
      show: function() {
        this.tasksCollection = new TaskCollection();
        this.tasksCollection.fetch();

        var addTaskView = new AddTaskView(),
          searchView = new SearchView(),
          resultsView = new TaskListView({
            collection: this.tasksCollection
          });

        this.layout = new TaskLayout();
        App.contentRegion.show(this.layout);

        this.layout.filtersRegion.show(addTaskView);
        this.layout.resultsRegion.show(resultsView);
        this.layout.paginationRegion.show(searchView);

        this.listenTo(addTaskView, 'task:add', this.addTask);
        this.listenTo(searchView, 'task:search', this.search);
        this.listenTo(resultsView, 'itemview:task:finished', this.confirmDone);
        this.listenTo(resultsView, 'itemview:task:remove', this.confirmRemove);
      },

      /**
       * [addTask description]
       * @param {[type]} data [description]
       */
      addTask: function(data) {
        var newModel = new TaskModel(data);
        this.tasksCollection.add(newModel);

        newModel.save();
      },

      /**
       * [search description]
       * @return {[type]} [description]
       */
      search: function(value) {
        value = value.toLowerCase();

        var filtered = _.filter(this.tasksCollection.models, function(item) {
          return item.get('name').toLowerCase().indexOf(value) > -1;
        });

        var filteredCollection = new TaskCollection(filtered),
          filteredResultsView = new TaskListView({
            collection: filteredCollection
          });

        this.layout.resultsRegion.show(filteredResultsView);

        this.listenTo(filteredResultsView, 'itemview:task:finished', this.confirmDone);
        this.listenTo(filteredResultsView, 'itemview:task:remove', this.confirmRemove);
      },

      /**
       * [confirmRemove description]
       * @return {[type]} [description]
       */
      confirmRemove: function(view, itemModel) {
        var confirmModal = new ConfirmModal({
          title: 'Remove Item',
          question: 'Are you sure you want to remove this task from the list?',
          confirm: _.bind(function() {
            itemModel.destroy();
          }, this),
          cancel: function() {
            console.log('Operation canceled');
          }
        });

        App.modalRegion.show(confirmModal);
      },

      /**
       * [confirmApprove description]
       * @return {[type]} [description]
       */
      confirmDone: function(view, itemModel) {
        var confirmModal = new ConfirmModal({
          title: 'Close Task',
          question: 'Are you sure you want to close this task?',
          confirm: _.bind(function() {
            itemModel.set('status', 'DONE');
            itemModel.save();
          }, this),
          cancel: function() {
            console.log('Operation canceled');
          }
        });

        App.modalRegion.show(confirmModal);
      }

    });

    return TaskController;
  }
);
