/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*global requestAnimationFrame*/
import toggleDropDown from '/js/toggleDropDown.js';

window.onload = () => {
	function scrollLoop() {
	 let scrollRate = 0.4;
		let element = document.querySelector("div.headerbackground");
		const setTranslate = (xPos, yPos, el) => el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
	setTranslate(0, window.scrollY * scrollRate, element);
		requestAnimationFrame(scrollLoop);
	}
	
	toggleDropDown("#accordian","nav","slidedown","slideup");

window.addEventListener('scroll', function(e){
	scrollLoop();
	/*
	if(window.scrollY > 500){
		document.querySelector("section#menu").style.position = "fixed";
	}
	else {
		document.querySelector("section#menu").style.position = "relative";
	}
	
	if(window.scrollY > 500){
			document.querySelector("menu").style.position = "fixed";
			document.querySelector(".mobilemenu").style.position = "fixed";
			document.querySelector(".mobilemneu").style.top = 0;
	}
	else {
		document.querySelector("menu").style.position = "relative";
			document.querySelector(".mobilemenu").style.position = "absolute";
	}
	*/
});
	/*
const toggleDropDown = () => {
	let navbar = document.querySelector("nav");
	if(navbar.classList.contains("slidedown")){
		navbar.classList.remove("slidedown");
		navbar.classList.add("slideup");
	}
	else if (navbar.classList.contains("slideup")){
		navbar.classList.remove("slideup");
		navbar.classList.add("slidedown");
	}
	else {
		navbar.classList.add("slideup");
	}
};
*/
	window.onresize = () => {
		if(window.innerWidth < 768){
			let navbar = document.querySelector("nav");
				navbar.classList.remove("slidedown");
				navbar.classList.remove("slideup");
		}
	};
	
	
/*
	document.getElementById("accordian").addEventListener("click", toggleDropDown);
	Array.from(document.querySelectorAll("nav a")).forEach(butt => {butt.addEventListener("click", toggleDropDown);});
	*/
};


