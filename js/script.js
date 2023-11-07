$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
      indicators: true,
      fullWidth: true
    });
    $('.slider').slider({
      interval: 3000,
      indicators: false
    });
  });