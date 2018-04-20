var vh = $( window ).height();
var pink = false;
var blue = false;
var yellow = false;
var orange = false;


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
    var page5Top = $("#end").offset().top;

    if (scrollPos >= page1Top - 0.11 * vh && scrollPos < page2Top - 0.11 * vh) {
      $("#home-button").addClass("active-pink");
      $("#about-button").removeClass("active-blue");
      $("#project-button").removeClass("active-yellow");
      $("#work-button").removeClass("active-orange");
        pink = true;
    } else {
      $("#home-button").removeClass("active-pink");
        pink = false;
    }

    if (scrollPos >= page2Top - 0.11 * vh && scrollPos < page3Top - 0.11 * vh) {
      $("#about-button").addClass("active-blue");
      $("#home-button").removeClass("active-pink");
      $("#project-button").removeClass("active-yellow");
      $("#work-button").removeClass("active-orange");
        blue = true;
    } else {
      $("#about-button").removeClass("active-blue");
        blue = false;
    }
    
    if (scrollPos >= page3Top - 0.11 * vh && scrollPos < page4Top - 0.11 * vh) {
      $("#project-button").addClass("active-yellow");
      $("#home-button").removeClass("active-pink");
      $("#about-button").removeClass("active-blue");
      $("#work-button").removeClass("active-orange");
        yellow = true;
    } else {
      $("#project-button").removeClass("active-yellow");
        yellow = false;
    }
      
    if (scrollPos >= page4Top - 0.11 * vh && scrollPos < page5Top - 0.11 * vh) {
      $("#work-button").addClass("active-orange");
      $("#home-button").removeClass("active-pink");
      $("#about-button").removeClass("active-blue");
      $("#project-button").removeClass("active-yellow");
        orange = true;
    } else {
      $("#work-button").removeClass("active-orange");
        orange = false;
    }
  });
});


$(document).ready(function(){
    $("#home-button").hover(function(){
        $(this).addClass("active-pink");
        }, function(){
        if(!pink)
        $(this).removeClass("active-pink");
    });
    $("#about-button").hover(function(){
        $(this).addClass("active-blue");
        }, function(){
        if(!blue)
        $(this).removeClass("active-blue");
    });
    $("#project-button").hover(function(){
        $(this).addClass("active-yellow");
        }, function(){
        if(!yellow)
        $(this).removeClass("active-yellow");
    });
    $("#work-button").hover(function(){
        $(this).addClass("active-orange");
        }, function(){
        if(!orange)
        $(this).removeClass("active-orange");
    });
});


$(document).ready(function(){
    var $win = $(window);

    $('div.background').each(function(){
        var scroll_speed = 10;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});