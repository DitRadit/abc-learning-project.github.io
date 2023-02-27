$(document).ready(function() {

    // NAVBAR
    $(window).on("scroll",function () {
        if($(this).scrollTop() > 90 ){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    

    // ADVANTAGES CAROUSEL
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
     // ADVANTAGES CAROUSEL END

     // TESTIMONIALS CAROUSEL
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    // TESTIMONIALS CAROUSEL END

    // MENTORS CAROUSEL 
    $('.testimonials-carousel-slideshow').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    // MENTORS CAROUSEL END

    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
     // NAVBAR END
      
        
});
$(function() {
    // Set up progress bars
    $(".progress-bar").progressbar({
      value: false,
    });
    
    // Update progress bars based on their 'aria-valuenow' attribute
    $(".progress-bar").each(function() {
      $(this).progressbar("value", $(this).attr("aria-valuenow"));
    });
  });
