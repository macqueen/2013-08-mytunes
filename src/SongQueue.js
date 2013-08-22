var SongQueue = Songs.extend({

  initialize: function(){
    var that = this;
    this.on('add', this.playFirst);
  },

  playFirst: function(){
    if (this.at(1) === undefined) {
      this.at(0).play();
    }
  }

});
