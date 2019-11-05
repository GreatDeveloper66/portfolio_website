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
  $('.header-window').parallax({imageSrc: '/images/Website_Background_2.jpg',speed: 0.4});
	$('section#socialMedia').parallax({imageSrc: '/images/socialmedia.jpg', speed: 0.4});
	$('section#portfolio').parallax({imageSrc: '/images/desk.jpg', speed:0.4});
	$('section#about').parallax({imageSrc: '/images/ocean3.jpg', speed:0.4});
	$('section#contact').parallax({imageSrc: '/images/ocean.jpg', speed:0.4});

	scrollJQuery();
	document.getElementById("accordian").addEventListener("click", function (e) {
		toggleDropDown(this, document.querySelector("nav"), "slidedown", "slideup");
	});
	Array.from(document.querySelectorAll("nav a")).forEach(elem => {
		elem.addEventListener("click", function (e) {
			toggleDropDown(this, document.querySelector("nav"), "slidedown", "slideup");
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
