/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*global requestAnimationFrame*/

window.onload = () => {
	function scrollLoop() {
	 let scrollRate = 0.4;
		let element = document.querySelector("div.headerbackground");
		const setTranslate = (xPos, yPos, el) => el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
	setTranslate(0, window.scrollY * scrollRate, element);
		requestAnimationFrame(scrollLoop);
	}
window.addEventListener('scroll', function(e){
	scrollLoop();
	if(window.scrollY > 500){
			document.querySelector("menu").style.position = "fixed";
			document.querySelector(".mobilemenu").style.position = "fixed";
	}
	else {
		document.querySelector("menu").style.position = "relative";
			document.querySelector(".mobilemenu").style.position = "absolute";
	}
});

};


