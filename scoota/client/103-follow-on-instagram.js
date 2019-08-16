//import {tns1} from 'tiny-slider';
//console.log(`tns1:`,tns1)

//const tns = require('tiny-slider')
//import { tns2 } from "./node_modules/tiny-slider/src/tiny-slider.js"
//console.log(`tns2:`,tns2)

//import Glide from '@glidejs/glide'

/*
const _11 = $('.owl-carousel').owlCarousel(
		    	{
		             margin:0,
				     loop:true,
				     autoplay:true,
				     autoplayTimeout:1500,
				     autoplaySpeed:1000,
				     autoplayHoverPause:true,
				     autoWidth:true,
				     items:4,
				     nav:true,
				     navText: [
		              '<i class="fa fa-chevron-left"></i>',
		              '<i class="fa fa-chevron-right"></i>'
		             ]
		        }
		    );

console.log('@11:',	_11)*/

import './103-follow-on-instagram.html'


Template.instagram_103.onRendered(function(){
  //const g = new Glide('.glide').mount()
  //$.getScript('owl.carousel.min.js')

  const carousel = this.find('.owl-carousel');
//  $('.owl-carousel')
  $(carousel).owlCarousel({
    margin:5,
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplaySpeed:2000,
    autoplayHoverPause:true,
    //autoWidth:true,
    //singleItem:true, // ??
    //autoHeight:true,
    items:4,
    nav:true,
    dots:true,
    navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
           ]
      }
  );

})
