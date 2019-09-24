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

window.onload = () => {
  
	function scrollLoop() {
		let scrollRate = 0.4;
		let element = document.querySelector("div.headerbackground");
  let element2 = document.querySelector("div.contactBackground");
		const setTranslate = (xPos, yPos, el) => el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
		setTranslate(0, window.scrollY * scrollRate, element);
  setTranslate(0, window.scrollY * scrollRate, element2);
		requestAnimationFrame(scrollLoop);
	}
 

	document.getElementById("accordian").addEventListener("click", function (e) {
		toggleDropDown(this, document.querySelector("nav"), "slidedown", "slideup");
	});
	Array.from(document.querySelectorAll("nav a")).forEach(elem => {
		elem.addEventListener("click", function (e) {
			toggleDropDown(this, document.querySelector("nav"), "slidedown", "slideup");
   if(!CSS.supports("scroll-behavior","smooth")){
     smoothScroll(elem.getAttribute("href"));
   }
		});
	});

	window.addEventListener('scroll', function (e) {
		scrollLoop();
	});

	window.onresize = () => {
		if (window.innerWidth > 768) {
			let navbar = document.querySelector("nav");
			navbar.classList.remove("slidedown");
			navbar.classList.remove("slideup");
		}
	};
};
