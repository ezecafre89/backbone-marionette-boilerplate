define(
  [
    'backbone',
    'marionette'
  ],
  function(Backbone, Marionette) {
    'use strict';

    var TaskLayoutView = Marionette.Layout.extend({
      template: 'task.layout.hbs',

      regions: {
        filtersRegion: '#filtersRegion',
        resultsRegion: Backbone.Marionette.Region.extend({
          el: '#resultsRegion',
        }),
        paginationRegion: '#paginationRegion'
      },

      events: {}
    });

    return TaskLayoutView;
  }
);
