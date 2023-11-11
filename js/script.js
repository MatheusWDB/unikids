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
    $(".membros").hide();
    $(".sumir").hide();
    $(".mostrar").on("click", function(){
      $(".mostrar").hide();
      $(".sumir").show();
      $(".membros").fadeIn();
    });
    $(".sumir").on("click", function(){
      $(".sumir").hide();
      $(".mostrar").show();
      $(".membros").fadeOut();
    });
  });