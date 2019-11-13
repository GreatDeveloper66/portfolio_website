window.onload = () => {
	$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    1000,
    'linear'
  )
})
  $('.header-window').parallax({imageSrc: '/images/Website_Background_2.jpg',speed: 0.5});
	$('section#socialMedia').parallax({imageSrc: '/images/socialmedia.jpg', speed: 0.5});



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



	function toggleDropDown(source, target, class1, class2) {
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

};
