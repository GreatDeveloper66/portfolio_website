/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global $*/
/*jshint esversion:6*/

  let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutQuad',
    offset: function(anchor,toggle){
      return 60;
    }
    
  });
	/*call jquery parallax*/
 $('.plx').parallax({imgSrc: '/images/bg-1.jpg', speed: 0.3});

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
  
  
  


