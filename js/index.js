/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*global requestAnimationFrame*/
/*global CSS*/
import toggleDropDown from '/js/toggleDropDown.js';
import smoothScroll from '/js/scroll.js';
import scrollJQuery from '/js/scrollJQuery.js';

window.onload = () => {


		scrollJQuery();
	
	document.getElementById("accordian").addEventListener("click", function (e) {
		toggleDropDown(this, document.querySelector("nav"), "slidedown", "slideup");
	});
	Array.from(document.querySelectorAll("nav a")).forEach(elem => {
		elem.addEventListener("click", function (e) {
			toggleDropDown(this, document.querySelector("nav"), "slidedown", "slideup");
			/*
   if(!CSS.supports("scroll-behavior","smooth")){
     smoothScroll(elem.getAttribute("href"));

   }
	 */
		});
	});

	window.onresize = () => {
		if (window.innerWidth > 768) {
			let navbar = document.querySelector("nav");
			navbar.classList.remove("slidedown");
			navbar.classList.remove("slideup");
		}
	};
};
