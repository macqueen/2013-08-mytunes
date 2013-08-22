var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    var songQueue = new SongQueue();
    this.set('songQueue', songQueue);

    params.library.on('enqueue', function(song){
      songQueue.push(song);
    });

    params.library.on('dequeue', function(){
      songQueue.shift();
    });

    params.library.on('ended', function(){
      songQueue.shift();
    });


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
  }

});
