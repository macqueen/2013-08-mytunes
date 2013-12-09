var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    var songQueue = new SongQueue();
    this.set('songQueue', songQueue);
    this.set('random', false);

    params.library.on('enqueue', function(song){
      songQueue.push(song);
    });

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
  },

  updateRandom: function() {
    this.set('random', !this.get('random'));
  }

});
