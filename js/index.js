/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global $*/
/*jshint esversion:6*/
/*global requestAnimationFrame*/


window.onload = () => {

	let scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800,
		easing: 'easeInOutQuad',
		offset: function (anchor, toggle) {
			return 60;
		}
	});

	window.onscroll = () => {
		const nava = document.getElementsByTagName("nav")[0];
		const navlinks = document.getElementById("navlinks");
		const navbarBrand = document.getElementsByClassName("navbar-brand")[0];
		if (window.pageYOffset > 600) {
			nava.classList.remove("bg-dark");
			nava.classList.remove("navbar-dark");
			nava.classList.add("bg-light");
			nava.classList.add("navbar-light");
			navlinks.classList.remove("ml-auto");
			navlinks.classList.add("mr-auto");
			navbarBrand.classList.add("invisible");
			//nava.classList.add("navbar-custom");
			nava.classList.add("py-0");
		} else {
			nava.classList.remove("bg-light");
			nava.classList.remove("navbar-light");
			nava.classList.add("bg-dark");
			nava.classList.add("navbar-dark");
			nava.classList.remove("py-0");
			navlinks.classList.remove("mr-auto");
			navlinks.classList.add("ml-auto");
			navbarBrand.classList.remove("invisible");
		}
	};
  /*
		Array.from(document.querySelector("a.navlink")).forEach(clickButton => {
			clickButton.addEventListerner("click", toggleDropDown);
		});

*/
		function scrollLoop(scrollRate = 0.35, elementArray = [".headerbackground", ".contactbackground", ".servicesbackground"]) {

			const setTranslate = (xPos, yPos, el) => el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
			elementArray.forEach(element => setTranslate(0, window.scrollY * scrollRate, document.querySelector(element)));
			requestAnimationFrame(scrollLoop);

		}

		/*
		const toggleDropDown = () => {
			let navmenu = document.querySelector("menu.navmenu");
			if (!navmenu.classList.contains("slidedown") && !navmenu.classList.contains("slideup")) {
				navmenu.classList.add("slidedown");
			} else {
				navmenu.classList.toggle("slidedown");
				navmenu.classList.toggle("slideup");
			}
		};

		document.getElementById("accordian").addEventListener("click", toggleDropDown);

	};


*/
};
