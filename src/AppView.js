var AppView = Backbone.View.extend({

  template: _.template('<div class="random">Randomize it!<input type="checkbox" <% if (random) { %>checked="checked"<% } %></div>'),

  currentTemplate: _.template('<div class="title">Welcome to MyTunes</div>'),

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
    this.$el.addClass('container');
    var currentSong = this.model.get('currentSong');
    return this.$el.html([
      this.currentTemplate(currentSong),
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new SongQueueView({collection: this.model.get('songQueue')}).render(),
      this.template(this.model.attributes)
    ]);
  }

});
