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
	
	if(Array.isArray(source)){
		source.forEach(elem => {toggleDropDown(elem,target,class1,class2);});	
	}
	else{
	source.addEventListener("click", function() {
		if (target.classList.contains(class1)) {
			target.classList.remove(class1);
			target.classList.add(class2);
		} else if (target.classList.contains(class2)) {
			target.classList.remove(class2);
			target.classList.add(class1);
		} else {
			target.classList.add(class1);
		}
	});
}
}