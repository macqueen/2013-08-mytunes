var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
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
  }

});
