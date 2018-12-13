$(function() {
  $(document).ready(function() {
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      }]
    });

    $('.testimonials-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        }
      }]
    });

    $('.btn-bottom').on("click", function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });

  });
});
