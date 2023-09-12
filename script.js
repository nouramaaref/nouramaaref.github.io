$(document).ready(function(){
	
	/*PARALLAX-PORTRAIT*/
	let moon = document.getElementById('moon');
	let initialTop = parseInt(getComputedStyle(moon).top);
	
	window.addEventListener('scroll', function(){
	    let value = window.scrollY;
	    let newPosition = Math.max(initialTop + value * 1.02, initialTop);
	    
	    // Calculer la hauteur du pied de page
	    let footer = document.querySelector('footer');
	    let footerRect = footer.getBoundingClientRect();
	    
	    // Vérifier si le pied de page est visible
	    if (footerRect.top > window.innerHeight) {
	        moon.style.top = newPosition + 'px';
	    }
	});

/*AOS-ANIM-ON-SCROLL*/
 if (window.innerWidth >= 800) {
  AOS.init();
} else {
  // Désactivez AOS en supprimant les classes et les attributs AOS des éléments animés
  var animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(function(element) {
    element.removeAttribute('data-aos');
    element.classList.remove('aos-init', 'aos-animate');
  });
}

}); //NE JAMAIS EFFACER!