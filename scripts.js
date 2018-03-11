var vh = $( window ).height();

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
                scrollTop: $(hash).offset().top - (0.1 * vh)
              }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior) - breaks when added
              });
            }
          });
        });

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    
    var page1Top = $("#home").offset().top;
    var page2Top = $("#about").offset().top;
    var page3Top = $("#projects").offset().top;
    var page4Top = $("#work").offset().top;

    if (scrollPos >= page1Top - 0.11 * vh && scrollPos < page2Top - 0.11 * vh) {
      $("#home-button").addClass("active");
      $("#about-button").removeClass("active");
      $("#project-button").removeClass("active");
      $("#work-button").removeClass("active");
    } else {
      $("#home-button").removeClass("active");
    }

    if (scrollPos >= page2Top - 0.11 * vh && scrollPos < page3Top - 0.11 * vh) {
      $("#about-button").addClass("active");
      $("#home-button").removeClass("active");
      $("#project-button").removeClass("active");
      $("#work-button").removeClass("active");
    } else {
      $("#about-button").removeClass("active");
    }
    
    if (scrollPos >= page3Top - 0.11 * vh && scrollPos < page4Top - 0.11 * vh) {
      $("#project-button").addClass("active");
      $("#home-button").removeClass("active");
      $("#about-button").removeClass("active");
      $("#work-button").removeClass("active");
    } else {
      $("#project-button").removeClass("active");
    }
      
    if (scrollPos >= page4Top - 0.11 * vh) {
      $("#work-button").addClass("active");
      $("#home-button").removeClass("active");
      $("#about-button").removeClass("active");
      $("#project-button").removeClass("active");
    } else {
      $("#work-button").removeClass("active");
    }

  });
});