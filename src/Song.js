var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
    this.parseUrl();
    this.on('ended', function(){
      this.set('playCount', this.get('playCount')+1);
    }, this);
  },

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  parseUrl: function(){
    var url = this.get('url2');
    var artistRegex = /\(.+\)/;
    var titleRegex = /\[.+\]/;
    var artist = artistRegex.exec(url);
    var title = titleRegex.exec(url);
    if (artist && title) {
      artist = artistRegex.exec(url)[0];
      artist = artist.substring(1, artist.length - 1);
      title = titleRegex.exec(url)[0];
      title = title.substring(1, title.length - 1);
      this.set('parsedArtist', artist);
      this.set('parsedTitle', title);
    }
  }

});
