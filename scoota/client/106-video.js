//import ModalVideo from 'modal-video';
//import 'youtube-video-js';
//const x = require('youtube-video-js');
//console.log('youtube-video-js',x)
import './106-video.html'

Template.video_106.onRendered(function(){
  // YouTube API will call onYouTubeIframeAPIReady() when API ready.
  // Make sure it's a global variable.
  onYouTubeIframeAPIReady = function () {

      // New Video Player, the first argument is the id of the div.
      // Make sure it's a global variable.
      player = new YT.Player("player3", {

          _height: "400",
          _width: "600",
          _width: "100%",
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
