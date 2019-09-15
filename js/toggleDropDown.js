/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*global requestAnimationFrame*/


export default function toggleDropDown(source, target, class1, class2) {
	if(window.innerWidth < 768){
		if(!target.classList.contains(class1) && !target.classList.contains(class2)){
				target.classList.add(class1);
		}
		else {
			target.classList.toggle(class1);
		 target.classList.toggle(class2);
		}
	}
	else {
		target.classList.remove(class1);
		target.classList.remove(class2);
	}
}




