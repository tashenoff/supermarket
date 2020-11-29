$(function() {
  objectFitImages();
});




$(".hamburger").on('click', function(){
    $('.navbar__dropdown').slideToggle('medium', function() {
    if ($(this).is(':visible')) {
        $(this).css('visibility','visible');
        
    }         
  });
  })
  
  
  $('.hamburger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('is-active');
  });
  
  
  
  


    $('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})


$('#owl-two').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:6,
          nav:false,
          loop:false
      }
  }
})