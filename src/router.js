var TunesRouter = Backbone.Router.extend({

	initialize: function() {
    // set up model objects
    var library = new Songs(songData);
    var app = new App({library: library});

    // build a view for the top level of the whole app
    var appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
	},

  routes: {
    "": 'index'
    // 'song/:title' : 'song'
  },

  index: function(){



  }
  // song: function(){
  //   // take user to the clicked song
  //   console.log("hello");
  // }
});