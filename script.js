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
AOS.init();

}); //NE JAMAIS EFFACER!