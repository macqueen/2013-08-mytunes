var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      this.remove(song);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
