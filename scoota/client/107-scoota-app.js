import './107-scoota-app.html'

Template.scoota_app_107.onRendered(function(){
  //const g = new Glide('.glide').mount()
  //$.getScript('owl.carousel.min.js')

  const carousel_107 = this.find('.owl-carousel')

//  $('.owl-carousel')
  $(carousel_107)
  .owlCarousel({
    _stagePadding: 50,
    margin:50,
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplaySpeed:2000,
    autoplayHoverPause:true,
    //autoWidth:true,
    //singleItem:true, // ??
    //autoHeight:true,
    items:3,
    center:true,
    nav:true,
    dots:true,
    rewindNav: true,
    navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
           ]
      }
  );

}); // onRendered
