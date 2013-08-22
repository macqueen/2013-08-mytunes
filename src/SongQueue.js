var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
