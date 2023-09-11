$( document ).ready(function() {

/*CHANGEMENT HEADER SCROLL*/
$(function() {
    	var header = $(".header");
    		$(window).scroll(function() {    
        		var scroll = $(window).scrollTop();
    
        			if (scroll >= 50) {
            			header.removeClass('header').addClass("header-black");
        			} else {
           				 header.removeClass("header-black").addClass('header');
        				}
    			});
			});

/*MENU BURGER*/
$('.burger').click(function() {
        $('body').toggleClass('menu-ouverte');
    });

/*CLOSE ICON*/
        $('.close-icon').click(function() {
            $('body').removeClass('menu-ouverte'); /* Retirer la classe menu-ouverte lorsque l'icône "X" est cliquée pour fermer le menu */
        });

/*SLICK-SLIDER-EQUIPE*/
$('.slider-cards').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
     nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
     
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
     'font-weight': '700',
     'background': 'transparent',
     'border': 'none',
     'color': '#445A8F'
   });

   $('.slick-next').css({
     'font-size': '30px',
     'background': 'transparent',
     'border': 'none',
     'color': '#445A8F'
   });


   /*SLICK-SLIDER-BANNIERE*/
$('.banner-slides').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000, 
  speed: 2000, 
  pauseOnHover: false
});



}); //jammais effacer