var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', function(model){
      this.render();
    }, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= parsedArtist %>)</td><td><%= parsedTitle %></td><td><%= playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
