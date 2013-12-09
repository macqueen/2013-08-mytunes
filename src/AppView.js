var AppView = Backbone.View.extend({

  template: _.template('<div class="random">Random?<input type="checkbox" <% if (random) { %>checked="checked"<% } %></div>'),

  events: {
    'click .random :checkbox' : function() {
      this.model.updateRandom();
    }
  },

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new SongQueueView({collection: this.model.get('songQueue')}).render(),
      this.template(this.model.attributes)
    ]);
  }

});
