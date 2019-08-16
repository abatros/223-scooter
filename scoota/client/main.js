import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import fontawesome from '@fortawesome/fontawesome-free';
import brands from '@fortawesome/fontawesome-free-brands';

console.log({brands})

import './main.html';
import "./100-header.js";
import "./101-home.js";
import "./102-section.js";
import "./103-follow-on-instagram.js";
import "./104-about-us.js";
import "./105-how-it-works.js";
import "./106-video.js";
import "./107-scoota-app.js";
import "./108-users.js";
import "./109-faq.js";
import "./110-download-app.js";
import "./112-get-in-touch.js";



FlowRouter.route('/', {
  name: 'main-page',
  action: function(params, queryParams){
        console.log('Router::action for: ', FlowRouter.getRouteName());
        console.log(' --- params:',params);
        BlazeLayout.render('main-page',params);
    }
});
