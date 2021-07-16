$(document).ready(function () {
  $('.teachers__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    center: true,
    navText: [" "],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1366: {
        items: 4,
        nav: true,
        center: false
      }
    }
  });
  
  $('.owl-nav').removeClass('disabled');
});