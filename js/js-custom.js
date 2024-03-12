
 //  cookies keep this on top
 function setCookie(e) {
    $.ajax({
      method: "post",
      url: ajaxlink,
      data: { action: "setcookies",cookie: e },
      success: function (e) {       
        $(".cookie-policy").hide();
      },
    });
  } 
  // Get the hostname of the current page
var hostname = window.location.hostname;
let main_link, tempdir, ajaxlink;
// Switch based on hostname
switch (hostname) {
    case "localhost":
         main_link = 'http://localhost/hexaware/hexaware-v2';
         tempdir = 'http://localhost/hexaware/hexaware-v2/wp-content/themes/hexaware';
         ajaxlink = 'http://localhost/hexaware/hexaware-v2/wp-admin/admin-ajax.php';
        break;
        case "microsites.hexaware.com":
            main_link = 'https://microsites.hexaware.com/hexaware-v2';
            tempdir = 'https://microsites.hexaware.com/hexaware-v2/wp-content/themes/hexaware';
            ajaxlink = 'https://microsites.hexaware.com/hexaware-v2/wp-admin/admin-ajax.php';
        break;
    case "hexaware.com":
         main_link = 'https://hexaware.com';
        tempdir = 'https://hexaware.com/wp-content/themes/hexaware';
        ajaxlink = 'https://hexaware.com/wp-admin/admin-ajax.php';
        break;
    default:
        // Handle default case if needed
        break;
}




  document.addEventListener('DOMContentLoaded', function() {
    // Function to replace error messages based on input field ID or name
    function replaceErrorMessages() {
        // Map of input field IDs or names to their corresponding error messages
        var errorMessagesMap = {
            
            // Example mapping:
            'email': 'Please enter work email address',
            'firstname': 'Please enter the full name',
            'phone': 'Please enter the phone number',
            'company':'Please enter the required field',
            'tell_us_more_about_your_need':'Please enter the required field',
            
            'how_did_you_hear_about_us__':'Please enter the required field',
            'jobtitle':'Please enter Job title ',

            'others__please_specify_':'Please enter other source',
            
            'the_information_you_provide_will_be_used_in_accordance_with_the_terms_of_our_privacy_policy_and_wou':'Please select the check box',
            
            // Add more mappings as needed
        };
        
        // Loop through each input field and replace its associated error message
        Object.keys(errorMessagesMap).forEach(function(fieldIdOrName) {
            var inputField = document.querySelector('[id="' + fieldIdOrName + '"]') || document.querySelector('[name="' + fieldIdOrName + '"]');
            if (inputField) {
                var errorMessage = inputField.closest('.hs-form-field').querySelector('.hs-error-msgs label');
                if (errorMessage) {
                    errorMessage.textContent = errorMessagesMap[fieldIdOrName];
                }
            }
        });
    }

    // Observe changes to the form using MutationObserver
    var observer = new MutationObserver(replaceErrorMessages);
    
    // Target the form container or the form itself
    var formContainer = document.querySelector('.hs-form');
    
    if (formContainer) {
        // Observe changes to the form container
        observer.observe(formContainer, { childList: true, subtree: true });
    } else {
        // If the form container is not found, try targeting the entire document
        observer.observe(document.body, { childList: true, subtree: true });
    }
});


  $(".moving_arrow_new").click(function (){
    $('html, body').animate({
        scrollTop: $("#home_scroll").offset().top
    }, 10);    
});

$(".moving_arrow_learn").click(function (){
    $('html, body').animate({
        scrollTop: $("#learning").offset().top
    }, 10);    
});


$(".moving_arrow_learn").click(function (){
    $('html, body').animate({
        scrollTop: $("#empowering").offset().top
    }, 10);    
});


// $(".moving_arrow_learn").click(function (){
//     $('html, body').animate({
//         scrollTop: $("#empowering").offset().top
//     }, 10);    
// });







!function() {
    "use strict";
    var n = {
        n: function(o) {
            var r = o && o.__esModule ? function() {
                return o.default
            }
            : function() {
                return o
            }
            ;
            return n.d(r, {
                a: r
            }),
            r
        },
        d: function(o, r) {
            for (var t in r)
                n.o(r, t) && !n.o(o, t) && Object.defineProperty(o, t, {
                    enumerable: !0,
                    get: r[t]
                })
        },
        o: function(n, o) {
            return Object.prototype.hasOwnProperty.call(n, o)
        }
    }
      , o = window.jQuery
      , r = n.n(o);
    r()((function() {
        r()(window).on("scroll", (function() {
            const n = r()(window).scrollTop()
              , o = .3 * n;
            r()(".banner_img").css("transform", "translate3d(0," + o + "px,0)"),
            r()(".scroll-down").css({
                transform: "translate3d(0, " + -5 * n + "px, 0)",
                opacity: 1 - n / 150
            })
        }
        )),
        r()(".scroll-down").click((function() {
            window.scrollTo(0, r()(".banner_scoll_up").next().offset().top)
        }
        ))
    }
    ))
}();

// parallax for middle section
$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var middleOffset = $('.parallax-section').offset().top + $('.parallax-section').outerHeight() / 2;
        var backgroundTop = (scrollTop - middleOffset) * 0.5 + 'px';
        $('.parallax-background').css('top', backgroundTop);
    });
});

// parallax for middle section
 
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var opacity = 1 - (scrollTop / 200); 
    opacity = Math.max(0, Math.min(opacity, 1));

    var translateY = scrollTop / 1;
    // var translate = scrollTop / 1000;

    $('.fade_onscroll').css('opacity', opacity);
    $('.fade_onscroll').css('transform', 'translate(-50%, calc(-50% - ' + translateY + 'px))');

    // $('.banner_img').css('transform', 'translateY(calc(-50% - ' + translate + 'px))');
});


 // scrollbar-slider-swiper 2 //
 var swiper = new Swiper('.toolsSlider', {
    slidesPerView: 4.5, // Display 4.5 cards at a time
    spaceBetween: 20, // Adjust the space between cards as needed
    draggable: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Optional: If you want the pagination dots to be clickable
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        270: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.3,
            spaceBetween: 40
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3.6,
            spaceBetween: 15
        },
        1680: {
            slidesPerView: 3.6,
            spaceBetween: 45
        },
    }
});

 
  // scrollbar-slider-swiper
  var swiper = new Swiper('.mySwiper_topic_blue_new', {
    slidesPerView: 1.8, // Display 4.5 cards at a time
    spaceBetween: 5, // Adjust the space between cards as needed
    draggable: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Optional: If you want the pagination dots to be clickable
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When window width is <= 767px
        767: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
        // When window width is <= 991px
        991: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1240: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1680: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
    },
});
// scrollbar-slider-swiper

$('.search').on('click', function () {
    $('.searchForm .form-control').focus();
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 150);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

$('.megaDropdown').mouseenter(function () {
    $(this).closest('.megaDropdown').find('.dropdownMenu').addClass('showMenu'); 
    $('header').addClass('fixedHeader')
});

$('.megaDropdown').mouseleave(function () {
    $(this).closest('.megaDropdown').find('.dropdownMenu').removeClass('showMenu'); 
    $('header').removeClass('fixedHeader')
});

$('.navbar-toggler').click(function () {
    $('header').toggleClass('fixedHeader')
});




  $('.fancybox-caption__body').html("");
  // scrollbar-slider-swiper

	$(document).ready(function (){
        if (window.innerWidth >= 768) {
            var swiper = new Swiper(".mySwiper_logo", {
                slidesPerView: 6,
                spaceBetween: 30,
                loop: true,
                // centeredSlides: true,
                autoplay: {
                    delay: 1200,
                    disableOnInteraction: false,
                }
            });
        }
		$(".moving_arrow").click(function (){
				$('html, body').animate({
				    scrollTop: $("#career_tabs").offset().top
				}, 10);
				
		});
	});


  var swiper = new Swiper('.mySwiper_topic', {
    slidesPerView: 2.5, // Display 4.5 cards at a time
    spaceBetween: 20, // Adjust the space between cards as needed
    draggable: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Optional: If you want the pagination dots to be clickable
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When window width is <= 767px
        767: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // When window width is <= 991px
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1240: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1680: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
    },
});
// scrollbar-slider-swiper

  // scrollbar-slider-swiper
  var swiper = new Swiper('.mySwiper_topic_blue', {
    slidesPerView: 'auto',  // Display 4.5 cards at a time
    spaceBetween: 5, // Adjust the space between cards as needed
    draggable: false,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Optional: If you want the pagination dots to be clickable
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // When window width is <= 767px
        767: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
        // When window width is <= 991px
        991: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1240: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1680: {
            slidesPerView: 4.2,
            spaceBetween: 20
        },
    },
});

// scrollbar-slider-swiper


var swiper = new Swiper('.topicswiper', {
    slidesPerView: 1.1, // Display 4.5 cards at a time
    spaceBetween: 10, // Adjust the space between cards as needed
    draggable: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Optional: If you want the pagination dots to be clickable
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        560: {
            slidesPerView: 2,
            spaceBetween: 20
        },
 
        991: {
            slidesPerView: 2,
        
        },


    },
});

$(document).ready(function () {

    // author read more & less //
        $('.read_mre_bttn').click(function () {
            $(this).prev('.read_mre_rstrct').toggleClass('show');
            $(this).find('.icon-img').toggleClass('rotate180');
            $(this).find('span').text(function (i, text) {
                return text === 'Read less' ? 'Read more' : 'Read less';
            });
        });

    /* header seach-bar click start */
    $('.search').on('click', function () {
        $('.triangle').addClass('showForm');
        $('.search-cancel').show();
        $('.logo_remove').addClass('logo_remove2'); // Add this line
        $(this).hide();
    });

 var swiper = new Swiper('.newsSlider2', {
    slidesPerView: 4.5, // Display 4.5 cards at a time
    spaceBetween: 30, // Adjust the space between cards as needed
    draggable: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Optional: If you want the pagination dots to be clickable
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
             spaceBetween: 30,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2.2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3.2,
            spaceBetween: 30,
        },
        1680: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    }
}); 

/* header seach-bar click start */
$('.search').on('click', function () {
    $('.triangle').addClass('showForm');
    $('.search-cancel').show();
    $('.logo_remove').addClass('logo_remove2'); // Add this line
    $(this).hide();
});

    $('.search-cancel').on('click', function () {
        $('.triangle').removeClass('showForm');
        $(this).hide();
        $('.search').show();
        $('.logo_remove').removeClass('logo_remove2'); // Add this line
    });
    /* header seach-bar click end */


    //career bring your team slider1//

    var swiper = new Swiper('.bringSwiper', {
        slidesPerView: 1, // Display 4.5 cards at a time
        // spaceBetween: 15,
        pagination: {
            el: '.swiperr-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },

    });
    //career bring your team slider 1

    // insights list filter card start
    // Function to open the filter card
    function openFilterCard() {
        $('.filter_resp_card_list').addClass('show');
    }

    // Function to close the filter card
    function closeFilterCard() {
        $('.filter_resp_card_list').removeClass('show');
    }

    // Click event for opening the filter card
    $('.filter_resp_list').click(function () {
        openFilterCard();
    });

    // Click event for closing the filter card when the button is clicked
    $('.filter_resp_card_list button').click(function () {
        closeFilterCard();
    });
    // insights list filter card end

   
   

    $(".menuOption").click(function () {
        $(this).closest('.menuOptionsList li').find('.mobileDropdown').addClass("showMenu");
    });

    $(".backStep").click(function () {
        $('.mobileDropdown').removeClass("showMenu");
    });

    if ($(window).width() > 767) {
        $('.footer_accordion .accordion-button').removeAttr('data-bs-toggle');
    }

    if ($(window).width() < 767) {
        $('.footer_accordion .accordion-button').attr("aria-expanded", "false");
        $('.footer_accordion .accordion-collapse').removeClass("show");
    }

    // scrollbar-slider-swiper
    if (window.innerWidth >= 768) {
        var swiper = new Swiper('.mySwiper', {
            slidesPerView: 'auto', // Display 4.5 cards at a time
            spaceBetween: 30, // Adjust the space between cards as needed
            draggable: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Optional: If you want the pagination dots to be clickable
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
        });
    }
    // scrollbar-slider-swiper

    // scrollbar-slider-swiper 2 //
    var swiper = new Swiper('.homeslider2', {
        slidesPerView: 1.1,
        spaceBetween: 30,
        draggable: false,
        // centeredSlides: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            425: { 
                slidesPerView: 1.2, 
                spaceBetween: 30,
            },
            560: { 
                slidesPerView: 1.4, 
                spaceBetween: 30,
            },
            620: { 
                slidesPerView: 1.8, 
                spaceBetween: 30,
            },
            768: { 
                slidesPerView: 'auto', 
                spaceBetween: 30,
            },
        }
      
    });
   

    var swiper = new Swiper('.newsSlider', {
        slidesPerView: 1.2, // Display 4.5 cards at a time
        spaceBetween: 30, // Adjust the space between cards as needed
        draggable: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            425: { 
                slidesPerView: 1.2, 
                spaceBetween: 30,
            },
            560: { 
                slidesPerView: 1.4, 
                spaceBetween: 30,
            },
            620: { 
                slidesPerView: 1.8, 
                spaceBetween: 30,
            },
            768: { 
                slidesPerView: 'auto', 
                spaceBetween: 30,
            },
        }
       
    });

    // banking-leadership-slider-swiper
    var swiper = new Swiper('.banking_swiper', {
        slidesPerView: 1.2, // Display 4.5 cards at a time
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            // When window width is <= 767px
            767: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // When window width is <= 991px
            991: {
                slidesPerView: 4,
                spaceBetween: 30
            },

        },
    });
    //banking-leadership-slider-swiper

    var swiper = new Swiper('.blogswiper', {
        slidesPerView: 1, // Display 4.5 cards at a time
        spaceBetween: 10, // Adjust the space between cards as needed
        draggable: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                coverflowEffect: {
                    stretch: 360,
                    depth: 200,
                },
            },

        },
    });

    // career globe accross slider 3//
    var swiper = new Swiper('.carrer', {
        slidesPerView: 1.5, // Display 4.5 cards at a time
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            375: {
                slidesPerView: 1.2,
                spaceBetween: 25
            },
            425: {
                slidesPerView: 1.8,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 3.5,
                spaceBetween: 20
            },
            // When window width is <= 991px
            991: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            1680: {
                slidesPerView: 4,
                spaceBetween: 32
            },
        },
    });
    // career globe accross slider 3//

    var swiper = new Swiper('.ourresponsibilities', {
        // slidesPerView: 1.5, // Display 4.5 cards at a time
        // spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            355: {
                slidesPerView: 1.25,
                spaceBetween: 25
            },
            375: {
                slidesPerView: 1.25,
                spaceBetween: 25
            },
            425: {
                slidesPerView: 1.25,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            // When window width is <= 991px
            991: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            1680: {
                slidesPerView: 3,
                spaceBetween: 32
            },
        },
    });

    // career face-team slider//
    var swiper = new Swiper('.faceswiper', {
        slidesPerView: 1.5, // Display 4.5 cards at a time
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            375: {
                slidesPerView: 1.2,
                spaceBetween: 25
            },
            425: {
                slidesPerView: 1.8,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            // When window width is <= 991px
            991: {
                slidesPerView: 3.5,
                spaceBetween: 32
            },
            1680: {
                slidesPerView: 4.3,
                spaceBetween: 32
            },
        },
    });
    // career face-team slider//



    // hexaware keypoints section scroll background effect starts

    var swiper = new Swiper('.mySwiper1', {
        slidesPerView: 1, // Display 4.5 cards at a time
        spaceBetween: 10, // Adjust the space between cards as needed
        draggable: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Optional: If you want the pagination dots to be clickable
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });


    /* Reports & Policies Start */
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    /* Reports & Policies End */


});

/* Reports & Policies Start */
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}

// sort dropdown
$('.search_results_select').select2({
    dropdownCssClass: "search_selection_new",
});

$('.search_results_select').select2({
    dropdownCssClass: "search_selection_new",
});
$('.repot_and').select2({
    dropdownCssClass: "search_selection_two",
});
   
// this script using to clear cookies in other pages except insight search and search page
// Get the current pathname
const pathname = window.location.pathname;

// Split the pathname into segments
const segments = pathname.split('/').filter(part => part !== '');

// Check if there are segments
if (segments.length > 0) {    
    
    // Perform actions based on the segments
    // For example, you can check if a specific segment exists in the array
    const targetSegment = 'insight-search';
    const searchtargetSegment = 'search-page';    
    if (segments.includes(targetSegment) || segments.includes(searchtargetSegment)) {        
        // Perform actions specific to 'segmentA'
    } else {        
        // Handle the case when the target segment is not found
        document.cookie = "custom_post_type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "industry=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "topics=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
} else {    
    // Handle the case when no segments are present in the pathname
}


// Define the source function
var autocompleteSource = function(request, response) {
    $.ajax({
        type: 'POST',
        url: action_url,
        data: {
            action: 'load_page_titles'
        },
        success: function(data) {
            var parsedData = JSON.parse(data);

            // Filter results based on the input text
            var filteredData = $.grep(parsedData, function(item) {
                return item.title.toLowerCase().includes(request.term.toLowerCase());
            });

            response(filteredData);
        }
    });
};


$("#tags").autocomplete({
    minLength: 3,
    source: autocompleteSource,
    select: function(event, ui) {
        window.location.href = ui.item.link; // Redirect to the selected page
    }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
    var decodedTitle = $("<div>").html(item.title).text();

    // Highlight the matched term in blue
    var term = this.term;
    var regex = new RegExp('(' + term + ')', 'gi');
    var highlightedTitle = decodedTitle.replace(regex, '<span>$1</span>');

    // Append the customized suggestion item to the suggestions list
    return $("<li>")
        .append($("<a>").attr("href", main_link+'?s='+item.title).html(highlightedTitle))
        .appendTo(ul);
};

$("#tags_mob").autocomplete({
    minLength: 3,
    source: autocompleteSource,
    select: function(event, ui) {
        window.location.href = ui.item.link; // Redirect to the selected page
    }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
    var decodedTitle = $("<div>").html(item.title).text();

    // Highlight the matched term in blue
    var term = this.term;
    var regex = new RegExp('(' + term + ')', 'gi');
    var highlightedTitle = decodedTitle.replace(regex, '<span>$1</span>');

    // Append the customized suggestion item to the suggestions list
    return $("<li>")
        .append($("<a>").attr("href", main_link+'?s='+item.title).html(highlightedTitle))
        .appendTo(ul);
};

// keep this at end of the script
$('.fancyBox').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
    // Add more options as needed
});


