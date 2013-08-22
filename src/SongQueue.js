var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.playFirst);
  },

  // events: {
  //   'add': 'playFirst'
  // },

  playFirst: function(){
    this.at(0).play();
  }

});
