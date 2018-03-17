
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#contact-button").on("click", function(event) {
    event.preventDefault();
    $("#contact-form").fadeIn(1000);
  });

  $("#cancel-button").on("click", function(event){
    event.preventDefault();
    $("#contact-form").fadeOut(1000);
  });

  $("#reset-button").on("click", function(event){
    event.preventDefault();
    document.getElementById("contact-form").reset();
  });
});



window.onscroll = () => {
  var navArray = document.querySelectorAll("nav a");
  var navBar = document.querySelectorAll("nav")[0];
  if (window.pageYOffset > 500) {
    navArray.forEach(function(nava) {
      nava.classList.remove("menu-text");
      nava.classList.add("scroll-menu-text");
      navBar.classList.remove("navbar-default");
      navBar.classList.add("navbar-inverse");
      navBar.classList.add("navbar-fixed-top");
    });
  } else {
    navArray.forEach(function(nava) {
      nava.classList.remove("scroll-menu-text");
      nava.classList.add("menu-text");
      navBar.classList.remove("navbar-inverse");
      navBar.classList.add("navbar-default");
      navBar.classList.remove("navbar-fixed-top");
    });
  }
};

