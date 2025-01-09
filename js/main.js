(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


   // Service-carousel
   $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// contact form start
function validateForm() {
    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Initialize valid flag
    var valid = true;

    // Name validation
    var namePattern = /^[A-Za-z\s]+$/;
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        valid = false;
    } else if (!namePattern.test(name.trim())) {
        document.getElementById("nameError").innerText = "Name should only contain letters and spaces.";
        valid = false;
    }

    // Email validation
     emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        valid = false;
    }

    // Subject validation
    if (subject.trim() === "") {
        document.getElementById("subjectError").innerText = "Please enter a subject.";
        valid = false;
    }

    // Message validation
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Please enter a message.";
        valid = false;
    }

    // Return the valid status
    return valid;
}

// contacr form end


 