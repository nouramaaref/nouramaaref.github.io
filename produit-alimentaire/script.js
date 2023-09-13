$( document ).ready(function() {


  //MENU BURGER/
$('.burger').click(function() {
      $('body').toggleClass('menu-ouverte');
    });

 //CLOSE ICON
$('.close-icon').click(function() {
      $('body').removeClass('menu-ouverte'); 
    });




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
  focusOnSelect: true,
   responsive: [
    {
      breakpoint: 1000, 
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600, 
      settings: {
        slidesToShow: 2, 
      }
    }

  ]
});

//FANCYBOX
Fancybox.bind("[data-fancybox]");

}); //jammais effacer