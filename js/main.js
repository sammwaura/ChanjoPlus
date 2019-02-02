/*
 * Title:   Sympathy - Charity, Non-Profit & Donations - HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]

 1. mobileMenu
 2. childMobileMenu
 3. backToTop
 4. revolutionSlider
 5. slickSlider
 6. animatedSkills
 7. lightBox
 8. owlCarousel
 9. donateModal
 10. qtyProduct
 11. raTing
 12. initMap

 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict

function mobileMenu() {
    if ($('.toggle-mobile a').length) {
        $('.toggle-mobile a').on('click', function () {
            $('.mobile-menu').toggle(0, 'linear');
            $('.toggle-mobile span').toggleClass('fa-bars fa-times');
            return false;
        });
    }
}

function childMobileMenu() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa fa-chevron-down"></span></button>';
        });
        
        $('.nav-holder .dropdown-expander').on('click', function () {
            if($(this).parent().parent().hasClass('active')) {
                $(this).parent().parent().children('.submenu').slideToggle();
                $(this).find('span').toggleClass('fa-chevron-down fa-chevron-up');
                $(this).parent('a').parent('li').toggleClass('active');
            }
            else {
                $('.nav-holder li.has-submenu .submenu').slideUp();
                $('.nav-holder li.has-submenu').removeClass('active');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').removeClass('fa-chevron-up');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').addClass('fa-chevron-down');
                $(this).parent().parent().addClass('active');
                $(this).find('span').removeClass('fa-chevron-down');
                $(this).find('span').addClass('fa-chevron-up');
                $(this).parent().parent().children('.submenu').slideDown();
            }
            return false;
        });
    }
}

function backToTop() {
    if ($('.char-backtotop').length) {
        var scrollTrigger = 700,
        backTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.char-backtotop').addClass('show-backtotop');
            } else {
                $('.char-backtotop').removeClass('show-backtotop');
            }
        };
        $(window).on('scroll', function () {
            backTop();
        });
    }
}

function revolutionSlider() {
    if($('.rev_slider_wrapper #slider_v1').length) {
        jQuery("#slider_v1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,							
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 751,
                    hide_over: 9999,
                    tmp: '<div class="char-arrow char-bg-green char-flex-box char-flex-box-ai-center char-flex-box-jc-center"><span class="fa"></span></div>',
                    left: {															
                        h_align: "left",
                        v_align: "center",
                        h_offset: 65,
                        v_offset: -120							
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 65,
                        v_offset: -120
                    }
                }
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [944, 844, 744, 544, 400],
            minHeight: 250
        });
    }
    
    if($('.rev_slider_wrapper #slider_v2').length) {
        jQuery("#slider_v2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,							
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 751,
                    hide_over: 9999,
                    tmp: '<div class="char-arrow char-bg-red char-flex-box char-flex-box-ai-center char-flex-box-jc-center"><span class="fa"></span></div>',
                    left: {															
                        h_align: "left",
                        v_align: "center",
                        h_offset: 65,
                        v_offset: 0							
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 65,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [700, 600, 500, 400, 300],
            minHeight: 250
        });
    }
    
    if($('.rev_slider_wrapper #slider_v3').length) {
        jQuery("#slider_v3").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,							
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 751,
                    hide_over: 9999,
                    tmp: '<div class="char-arrow char-bg-blue char-flex-box char-flex-box-ai-center char-flex-box-jc-center"><span class="fa"></span></div>',
                    left: {															
                        h_align: "left",
                        v_align: "center",
                        h_offset: 65,
                        v_offset: 0							
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 65,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [891, 791, 691, 591, 491],
            minHeight: 350
        });
    }
}

function slickSlider() {
    if($('.slick-cause').length) {
        $('.slick-cause').slick({
            dots: false,
            variableWidth: false,
            arrows: false,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slick-year'
        });
    }
    
    if($('.slick-year-v1').length) {
        $('.slick-year-v1').slick({
            dots: false,
            variableWidth: false,
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slick-cause',
            focusOnSelect: true,
            centerMode: true,
            centerPadding: 0,
            prevArrow: '<button type="button" data-role="none" class="slick-prev char-arrow char-bg-red char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Previous" tabindex="0" role="button"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next char-arrow char-bg-red char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Next" tabindex="0" role="button"><span class="fa fa-angle-right"></span></button>'
        });
    }
    
    if($('.slick-year-v2').length) {
        $('.slick-year-v2').slick({
            dots: false,
            variableWidth: false,
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slick-cause',
            focusOnSelect: true,
            centerMode: true,
            centerPadding: 0,
            prevArrow: '<button type="button" data-role="none" class="slick-prev char-arrow char-bg-blue char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Previous" tabindex="0" role="button"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next char-arrow char-bg-blue char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Next" tabindex="0" role="button"><span class="fa fa-angle-right"></span></button>'
        });
    }
    
    if($('.slick-volunteer-v2').length) {
        $('.slick-volunteer-v2').slick({
            dots: false,
            variableWidth: false,
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0,
            prevArrow: '<button type="button" data-role="none" class="slick-prev char-arrow char-bg-red char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Previous" tabindex="0" role="button"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next char-arrow char-bg-red char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Next" tabindex="0" role="button"><span class="fa fa-angle-right"></span></button>'
        });
    }
    
    if($('.slick-volunteer-v3').length) {
        $('.slick-volunteer-v3').slick({
            dots: false,
            variableWidth: false,
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0,
            prevArrow: '<button type="button" data-role="none" class="slick-prev char-arrow char-bg-blue char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Previous" tabindex="0" role="button"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next char-arrow char-bg-blue char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Next" tabindex="0" role="button"><span class="fa fa-angle-right"></span></button>'
        });
    }
    
    if($('.slick-our-gallery').length) {
        $('.slick-our-gallery').slick({
            dots: false,
            infinite: false,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        var filtered = false;
        $('#our_gallery .button-filter').on('click', function(){
            var filtername = $(this).attr('id');
            if (filtered === false) {
                $('.slick-our-gallery').slick('slickUnfilter');
                $('.slick-our-gallery').slick('slickFilter','.filter-' + filtername);
                $('#our_gallery .button-filter').attr('class','button-filter brick-hover-child-background-yellow');
                $(this).attr('class','active button-filter brick-hover-child-background-yellow');
                return false;
            } else {
                $('.slick-our-gallery').slick('slickUnfilter');
                $('.slick-our-gallery').slick('slickFilter','.filter-' + filtername);
                $('.slick-our-gallery').slickGoTo(0);
                $('#our_gallery .button-filter').attr('class','button-filter brick-hover-child-background-yellow');
                $(this).attr('class','active button-filter brick-hover-child-background-yellow');
                filtered = false;
                return false;
            }
        });
    }
    
    if($('.slick-latest-campaign-v2').length) {
        $('.slick-latest-campaign-v2').slick({
            dots: false,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            infinite: false
        });
    }
    
    if($('.slick-big-images').length) {
        $('.slick-big-images').slick({
            dots: false,
            variableWidth: false,
            arrows: true,
            prevArrow: '<button type="button" data-role="none" class="slick-prev char-arrow char-bg-transparent char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Previous" tabindex="0" role="button"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next char-arrow char-bg-transparent char-flex-box char-flex-box-ai-center char-flex-box-jc-center" aria-label="Next" tabindex="0" role="button"><span class="fa fa-angle-right"></span></button>',
            fade: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slick-thumbnail-images'
        });
    }
    
    if($('.slick-thumbnail-images').length) {
        $('.slick-thumbnail-images').slick({
            dots: false,
            variableWidth: false,
            arrows: false,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slick-big-images',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    
    if($('.slick-videos').length) {
        $('.slick-videos').slick({
            dots: true,
            variableWidth: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
}

function animatedCountBar() {
    if($('.animated-count-bar').length) {
        $('.animated-count-bar').waypoint(function() {
            $('.counts-bar').each(function() {
                $(this).find('.count-bar').animate({
                    width:$(this).attr('data-percent')
                },1500);
                
                $(this).find('.count').animate({
                    left:$(this).attr('data-percent')
                },1500);
            });
	},
        {
            offset: '35%'
	});
    }
}

function lightBox() {
    if($('#footer_gallery').length) {
        $('#footer_gallery').lightGallery();
    }
}

function owlCarousel() {
    if($('.loop-one').length) {
        $('.loop-one').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-two').length) {
        $('.loop-two').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-three').length) {
        $('.loop-three').owlCarousel({
            center: false,
            items: 1,
            nav: false,
            loop: true,
            margin: 0,
            autoplay: true,
            responsive: {
                600: {
                    items: 1
                }
            }
        });
    }
}

function donateModal() {
    if($('#donate_modal').length) {
        $('#donate_leanmodal').leanModal({top: 50, overlay: 0.6});
    }
}

function qtyProduct() {
    if($('.box-qty').length) {
        $('.box-qty .qty-plus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().parent().find('.qty-number').val();
            $button.parent().parent().find('.qty-number').val(parseInt(intValue, 10) + 1);
            return false;
        });
        
        $('.box-qty .qty-minus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().parent().find('.qty-number').val();
            if (parseInt(intValue, 10) > 1) {
                $button.parent().parent().find('.qty-number').val(parseInt(intValue, 10) - 1);
            }
            return false;
        });
        
        $('.qty-number').on('blur', function () {
            var $button = $(this);
            if ($button.parent().parent().find('.qty-number').val() === "" || parseInt($button.parent().parent().find('.qty-number').val(), 10) === 0) {
                $button.parent().parent().find('.qty-number').val("1");
            }
        });
        $('.qty-number').on('keypress', function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}

function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 3,
            ratedFill: "#66af31",
            halfStar: true
        });
    }
}

function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['Haviva Holcomb, P.O. Box 642 3450 In <br> Isle of Palms New York 03828', 40.712784, -74.005941, 1]
        ];
        
        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 16,
            center: new google.maps.LatLng(40.714700, -74.005901),
			scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        });
        
        var infowindow = new google.maps.InfoWindow();
        
        var marker, i;
        
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    };
}

// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        mobileMenu();
        childMobileMenu();
        revolutionSlider();
        slickSlider();
        animatedCountBar();
        lightBox();
        owlCarousel();
        donateModal();
        qtyProduct();
        raTing();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {
    (function ($) {
        backToTop();
    })(jQuery);
});

