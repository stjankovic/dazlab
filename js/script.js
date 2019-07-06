// Gets window width
let width = $(window).width();

// Duration of the animations
let time = 400;

// Collapsed
let small = 0.02;
let mobileSmall = 0.02;

//Default width (100 / 8)
let normal = 0.125;
let mobileNormal = 0.10;

// Hover width (100 / 8) * 2
let medium = 0.25;
let mobileMedium = 0.20;

// Opened item
let large = 0.70;
let mobileLarge = 0.65;

// Controls the collapses
let reset = true;
let count = 0;

// Controls the menu
let navOpen = false;
let navOpenMobile = false;

let countNav = 0;

// Conditions for the responsive
if(width >= 800) {
    fullWidth();
    Nav();
}
else {
    mobileWidth();
    mobileNav();
}
//All of the functions for Mobile screens;
function fullWidth() {
    $('.item').addClass('min-w');
    $('a').addClass('hidden');
    $(".overlay").hover(
        function() {
            if(navOpen == false) {
                reset = true;
                count = 0;
                $(".item").animate({width: $(window).width()* normal}, time - 100);
                $(".item").children().css({'opacity': 0});
                $(".item").clearQueue();
            }
        }
    )
    $(".item").hover(
        function() {
            if(reset == true && navOpen == false) {
                $(this).stop().animate({width: $(window).width()* medium}, time - 100);
                $(".item").children().css({'opacity': 0});
            }
        }
    )
    $(".item").click(
        function() {
            navOpen = false;
            $(".item").children().css({'opacity': 0});
            $(this).children().css({'opacity': 1});
            $('a').addClass('hidden');
            $('a').removeClass('visible');
            $('a').css({'opacity': 0});
            countNav = 0;
            navOpen = false;  
        }
    )
    $(".item").click( 
        function() {
            if(navOpen == false) {
                reset = false;
                $(".item").stop().animate({width: $(window).width()* small}, time - 200);
                $(this).stop().animate({width: $(window).width()* large}, time - 200);
            }
        }
    );
}
function mobileWidth() {
    $(".item").click(
        function() {
            $(".item").children().css({'opacity': 0});
            $(this).children().css({'opacity': 1});
            $('.item a').removeClass('visible');
            $('.item a').addClass('hidden');
        }
    );
    $(".item").click(
        function() {
            $(".item").stop().animate({height: $(window).height() * mobileSmall }, time - 200);
            $(this).stop().animate({height: $(window).height() * mobileLarge }, time - 200);
            countNav = 0;
            reset = false;
        }
    );
    $(".overlay").click(
        function() {
            $(".item").animate({height: $(window).height() * mobileNormal }, time - 200);
            $(".item").children().css({'opacity': 0});
        }
    );
}
function resetContainer() {
    $(".item").animate({height: $(window).height() * mobileNormal }, time - 200);
    $(".item").children().css({'opacity': 0});
}
// Function to open the navigation
function Nav() {
    $('nav').click(
        function () {
            countNav++;
            if(countNav == 1) {
                showItems();
                navOpen = true;
            }
            else if(countNav == 2) {
                countNav = 0;
                navOpen = false;
                hideItems();
            }
    });
}
function mobileNav() {
    $("nav").click(
        function() {
            countNav++;
            if(countNav == 1) {
                resetContainer();
                showItems();
                navOpen = true;
            }
            else if(countNav == 2) {
                countNav = 0;
                navOpen = false;
                hideItems();
            }
        }
    );
}
function showItems() {
    $.each( items, function(i, val) {
        $('.' + val + ' a').removeClass('hidden');
        $('.' + val + ' a').addClass('visible');
        $('.' + val + ' a').animate({opacity: 1}, 500);
    });
}
function hideItems() {
    $.each( items, function(i, val) {
        $('.' + val + ' a').animate({opacity: 0}, 500);
    });
}
// Made by:
console.log(`Made by Stefan Jankovic`);
console.log(`@stjankovic`);
