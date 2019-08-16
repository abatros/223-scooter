import './101-home.html';
import './101-visit-stores.js'
import './101-subscribe.js'

Template.subscribe_101.onRendered(function(){
  console.log(`subscribe_101.onRendered:`,this.data)
  const width = this.data.width; // string.
  if (width) {

  }
});


Template.subscribe_101.events({

})


Template.carousel_101.onRendered(function(){
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
    autoHeight:true,
    items:1,
    nav:true,
    dots:true,
    navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
           ]
      }
  );

})
