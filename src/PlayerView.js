var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var that = this;
    that.$el.on('ended', function(){
      that.model.trigger('ended');
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
