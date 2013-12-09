var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended dequeue', function(song){
      this.remove(song);
      if (this.length >= 1) {
        if (this.random) {
          this.playRandom();
        } else {
          this.playFirst();
        }
      }
    }, this);

  },


  playFirst: function(){
    console.log('now playing: ', this.at(0).attributes.title);
    this.at(0).play();
  },

  playRandom: function() {
    var randomIndex = Math.floor((Math.random() * this.length));
    console.log('now playing: ', this.at(randomIndex).attributes.title);
    this.at(randomIndex).play();
  },

  updateSongQRandom: function(input) {
    this.random = input;
  }

});
