$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
    });
    /////////cats Slider/////////
    $('.cats-slider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="10.554" height="20" viewBox="0 0 10.554 20"><path id="Path_933" data-name="Path 933" d="M36.866,23.894l-9.683-9.6-.84.8,9.181,9.2-9.212,9.2.876.8,9.678-9.6Z" transform="translate(-26.312 -14.293)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="10.554" height="20" viewBox="0 0 10.554 20"><path id="Path_933" data-name="Path 933" d="M26.312,23.894,36,14.293l.84.8-9.181,9.2,9.212,9.2-.876.8-9.678-9.6Z" transform="translate(-26.312 -14.293)"/></svg>'],
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1199: {
                items: 4,
            },
        }
    });

    /////////pros Slider/////////
    $('.products-slider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="10.554" height="20" viewBox="0 0 10.554 20"><path id="Path_933" data-name="Path 933" d="M36.866,23.894l-9.683-9.6-.84.8,9.181,9.2-9.212,9.2.876.8,9.678-9.6Z" transform="translate(-26.312 -14.293)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="10.554" height="20" viewBox="0 0 10.554 20"><path id="Path_933" data-name="Path 933" d="M26.312,23.894,36,14.293l.84.8-9.181,9.2,9.212,9.2-.876.8-9.678-9.6Z" transform="translate(-26.312 -14.293)"/></svg>'],
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
        }
    });
    /////////cats Slider/////////
    if ($(window).width() <= 991) {
        $('.feats').addClass("owl-carousel")
        $('.feats').owlCarousel({
            margin: 26,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
            }
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".foot-nav").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    /////////search/////////
    $('.search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusOut();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    ///////// **menu** /////////
    if ($(window).width() <= 991) {
        $('.menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});