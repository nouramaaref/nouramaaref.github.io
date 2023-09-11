$( document ).ready(function() {


/*MENU BURGER*/
$('.burger').click(function() {
        $('body').toggleClass('menu-ouverte');
    });

/*CLOSE ICON*/
        $('.close-icon').click(function() {
            $('body').removeClass('menu-ouverte'); /* Retirer la classe menu-ouverte lorsque l'icône "X" est cliquée pour fermer le menu */
        });



/*SLICK-SLIDER-SPECIALITES*/
$('.slider-cards').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
     nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
     
     responsive: [
           {
             breakpoint: 1000,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
             },
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
             },
           }
         ]
       });

   $('.slick-prev').css({
     'font-size': '30px',
     'background': 'transparent',
     'border': 'none',
     'color': 'tomato'
   });

   $('.slick-next').css({
     'font-size': '30px',
     'background': 'transparent',
     'border': 'none',
     'color': 'tomato'
   });

}); //jammais effacer