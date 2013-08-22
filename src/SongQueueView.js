var SongQueueView = Backbone.View.extend({

  initialize: function() {
  },

  tagName: "table",

  render: function() {
  //  this.$el.children().detatch();
    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
