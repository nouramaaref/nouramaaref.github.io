$( document ).ready(function() {

 //DOUBLE SLIDER  
$('.ds-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.ds-nav'
});
$('.ds-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.ds-top',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});

//FANCYBOX
Fancybox.bind("[data-fancybox]");

}); //jammais effacer