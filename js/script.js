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

//Current angle for the container rotation
let currentAngle = 0;

// Conditions for the responsive
if(width >= 800) {
    fullWidth();
    menuDesktop();
}
else {
    mobileWidth();
    menuMobile();
}

//All of the functions for Mobile screens;
function menuMobile() {
    
}
function mobileWidth() {
    
    $(".item").click(
        function() {
            $(".item").children().css({'opacity': 0});
            $(this).children().css({'opacity': 1});
        }
    );
    $(".item").click(
        function() {
            count++;
            reset = false;
            console.log(`Count: ${count}`);
            if(count == 1) {
                $(".item").stop().animate({height: $(window).height() * mobileSmall }, time - 200);
                $(this).stop().animate({height: $(window).height() * mobileLarge }, time - 200);
            }
            else if(count == 2) {
                count = 0;
                $(".item").stop().animate({height: $(window).height() * mobileNormal }, time - 200);
                $(".item").children().css({'opacity': 0});
            }
        }
    );
    $(".overlay").click(
        function() {
            $(".item").stop().animate({height: $(window).height() * mobileNormal }, time - 200);
            $(".item").children().css({'opacity': 0});
            count = 0;
        }
    );
}
//All of the functions for Desktop screens;
function menuDesktop() {
    $(".menu-button").click(
        function() {
            if(navOpen == false) {
                navOpen = true;
                fullWidth();
                console.log(`Nav open: ${navOpen}`);
                openNav();
            }
            else { 
                navOpen = false;
                fullWidth();
                console.log(`Nav open: ${navOpen}`);
                closeNav();
            }
            
        }
    )
    $(".menu-button").hover(
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
}
function fullWidth() {

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
            if(navOpen == false) {
                $(".item").children().css({'opacity': 0});
                $(this).children().css({'opacity': 1});
            }
        }
    )
    $(".item").click( 
        function() {
            if(navOpen == false) {
                count++;
                reset = false;
                if(count == 1) {
                    $(".item").stop().animate({width: $(window).width()* small}, time - 200);
                    $(this).stop().animate({width: $(window).width()* large}, time - 200);
                }
                else if(count == 2) {
                    $(".item").stop().animate({width: $(window).width()* normal}, time - 200);
                    $(".item").children().css({'opacity': 0});
                    count = 0;
                    reset = true;
                }
            }
        }
    );
    
}

function openNav() {
    hideItems();
    $(".container").stop().animate({
        width: $(window).width() * 0.2,
        height: $(window).width() * 0.4,
        left: $(window).width() * 0.4,
        top: $(window).height() * 0.05
    },
        500
    );
    
    AnimateRotate(-90);
   
}
function closeNav() {
    AnimateRotate(0);
    $(".container").animate({
        width: $(window).width() * 0.8,
        height: $(window).height() * 0.9,
        left: $(window).width() * 0.08,
        top: $(window).height() * 0.05
    },
        500
    );
    showItems();
 }

function AnimateRotate(angle) {
    var $elem = $('.container');
    $({deg: currentAngle}).animate({deg: angle}, {
        duration: 500,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }

    });
    currentAngle = angle;
}

function showItems() {
    $(".item1").fadeIn( 500, function() { });
    $(".item1").animate({width: $(window).width()* normal}, time - 200);
    
    $(".item3").fadeIn( 500, function() { });
    $(".item3").animate({width: $(window).width()* normal}, time - 200);
    
    $(".item5").fadeIn( 500, function() { });
    $(".item5").animate({width: $(window).width()* normal}, time - 200);
    
    $(".item7").fadeIn( 500, function() { });
    $(".item7").animate({width: $(window).width()* normal}, time - 200);
}
function hideItems() {
    $(".item1").animate({ width: 0}, 300);
    $(".item1").fadeOut( 100, function() { });

    $(".item3").animate({ width: 0}, 300);
    $(".item3").fadeOut( 100, function() { });

    $(".item5").animate({ width: 0}, 300);
    $(".item5").fadeOut( 100, function() { });

    $(".item7").animate({ width: 0}, 300);
    $(".item7").fadeOut( 100, function() { });
}

console.log(`Made by Stefan Jankovic`);
console.log(`@stjankovic`);
