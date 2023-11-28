
/*STICKY MENU On Scroll*/
var height = $("#fixed_top").height();
$(window).scroll(function () {
   if ($(this).scrollTop() > height) {
        $("#category_filter_part").addClass("fixed");
    } else {
        $("#category_filter_part").removeClass("fixed");
    }
});

/***Category Filter Js Code*** */
function categoryShow() {
    var category_div = document.getElementById("category_part");
    if (category_div.style.display === "none") {
      category_div.style.display = "block";
    } else {
      category_div.style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var parentMenuItems = document.querySelectorAll(".parentMenuItem");

    // Add click event listener to each parent menu item
    parentMenuItems.forEach(function (parentMenuItem) {
      var submenu = parentMenuItem.querySelector(".submenu");

      parentMenuItem.addEventListener("click", function () {
        // Close all other submenus and remove active class from other parent menus
        parentMenuItems.forEach(function (item) {
          var otherSubmenu = item.querySelector(".submenu");
          if (
            item !== parentMenuItem &&
            otherSubmenu.style.display === "block"
          ) {
            otherSubmenu.style.display = "none";
            item.classList.remove("active-parent-menu");
          }
        });

        // Toggle the display of the clicked submenu and add/remove active class to the parent menu
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }

        parentMenuItem.classList.toggle("active-parent-menu");
      });
    });
  });
/*** End Category Filter Js Code*** */

$(document).ready(function () {

    //Owl-carousel For Category
    $(".category .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 6000,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1024: {
                items: 6,
            },
            1200: {
                items: 8,
            },
        },
    });
    //End Owl-carousel For Category

      //Owl-carousel For Slider Top
      $(".slider_top_part .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 6000,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            1024: {
                items: 1,
            },
        },
    });
    //End Owl-carousel For Slider Top

    
      //Owl-carousel For Hot Deals
      $(".hot_body .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 6000,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            1024: {
                items: 1,
            },
        },
    });
    //End Owl-carousel For Hot Deals

    
      //Owl-carousel For Hot Deals
      $(".cart_body .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 6000,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            1024: {
                items: 1,
            },
        },
    });
    //End Owl-carousel For Hot Deals

    
      //Owl-carousel Weekly Brands
      $(".weekly_body .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 6000,
        autoplay: false,
        dots: true,
        nav: false,
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1024: {
                items: 4,
            },
        },
    });
    //End Owl-carousel For Weekly Brands

});





