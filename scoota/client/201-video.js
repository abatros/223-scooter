import './201-video.html'

FlowRouter.route('/video', {
  name: 'main-page',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('video_201',params);
    }
});

Template.video_201.onRendered(function(){
  // YouTube API will call onYouTubeIframeAPIReady() when API ready.
  // Make sure it's a global variable.
  onYouTubeIframeAPIReady = function () {

      // New Video Player, the first argument is the id of the div.
      // Make sure it's a global variable.
      player = new YT.Player("player3", {

          height: "600",
          width: "600",

          // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
//          videoId: "LdH1hSWGFGU",
          videoId: "YbOQGPENXH8",

          // Events like ready, state change,
          events: {
              onReady: function (event) {
                  // Play video when player ready.
                  event.target.playVideo();
              }
          }
      });
  };

  YT.load();
});
