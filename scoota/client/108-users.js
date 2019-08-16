import './108-users.html'


Template.users_108.onRendered(function(){
  //const g = new Glide('.glide').mount()
  //$.getScript('owl.carousel.min.js')

  const users_108 = this.find('.owl-carousel')

//  $('.owl-carousel')
  $(users_108)
  .owlCarousel({
    //_stagePadding: 50,
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
