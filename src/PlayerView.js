var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var that = this;
    that.$el.on('ended', function(){
      that.model.set('playCount', that.model.get('playCount')+1);
      that.model.dequeue();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
