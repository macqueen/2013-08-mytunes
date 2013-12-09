var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= parsedArtist %>)</td><td><%= parsedTitle %></td><td><%= playCount %></td>'),

  events: {
    'click' : function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
