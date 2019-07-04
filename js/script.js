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
            $(".item").animate({height: $(window).height() * mobileNormal }, time - 200);
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
function menuMobile() {
    $(".menu-button").click(
        function() {
            if(navOpen == false) {
                navOpen = true;
            
                console.log(`Nav open: ${navOpen}`);
                openMobileNav();
            }
            else { 
                navOpen = false;
 
                console.log(`Nav open: ${navOpen}`);
                closeMobileNav();
                
            }
            
        }
    )
}


// Function to open the navigation
function openNav() {
    $('.item').removeClass('min-w');
    hideItems();
    showLinks();
    $(".container").stop().animate({
        width: $(window).width() * 0.2,
        height: $(window).width() * 0.4,
        left: $(window).width() * 0.4,
        top: $(window).height() * 0.05
    },
        300
    );
    
    AnimateRotate('.container', -90);
    moveItem('nav > img', 0.31, 0.1, 0.16);
    currentAngle = 0;
    AnimateRotate('nav > h1', -90);
    moveItem('nav > h1', -0.5, 0, -0.09);
}
function openMobileNav() {
    $(".item").animate({height: $(window).height() * mobileNormal }, time - 200);
    hideMobileItems();
    showMobileLinks();

}


// Function to close the navigation
function closeNav() {
    $('.item').addClass('min-w');
    $('a').removeClass('links');
    moveItem('nav > img', 0.93, 0.05, 0.05);
    AnimateRotate('nav > h1', 0);
    
    moveItem('nav > h1', -0.02, 0.05, 0.15);
    currentAngle = -90;
    AnimateRotate('.container', 0);
    $(".container").animate({
        width: $(window).width() * 0.8,
        height: $(window).height() * 0.9,
        left: $(window).width() * 0.08,
        top: $(window).height() * 0.05
    },
        500
    );
    showItems();
    $(".item").animate({width: $(window).width()* normal}, time - 100);
    $(".item").children().css({'opacity': 0});

}
function closeMobileNav() {
    showMobileItems();
    $(".item").animate({height: $(window).height() * mobileNormal }, time - 200);
    $(".item").children().css({'opacity': 0});
}


// Display odd items
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
function showMobileItems() {
    $(".item1").fadeIn( 500, function() { });
    $(".item1").animate({height: $(window).height()* mobileNormal}, time - 200);
    
    $(".item3").fadeIn( 500, function() { });
    $(".item3").animate({height: $(window).height()* mobileNormal}, time - 200);
    
    $(".item5").fadeIn( 500, function() { });
    $(".item5").animate({height: $(window).height()* mobileNormal}, time - 200);
    
    $(".item7").fadeIn( 500, function() { });
    $(".item7").animate({height: $(window).height()* mobileNormal}, time - 200);
    
}


// Hide odd items
function hideItems() {
    $(".item1").animate({ width: 0}, 200);
    $(".item1").fadeOut( 100, function() { });

    $(".item3").animate({ width: 0}, 200);
    $(".item3").fadeOut( 100, function() { });

    $(".item5").animate({ width: 0}, 200);
    $(".item5").fadeOut( 100, function() { });

    $(".item7").animate({ width: 0}, 200);
    $(".item7").fadeOut( 100, function() { });
}
function hideMobileItems() {
    $(".item1").animate({ height: 0}, 200);
    $(".item1").fadeOut( 100, function() { });

    $(".item3").animate({ height: 0}, 200);
    $(".item3").fadeOut( 100, function() { });

    $(".item5").animate({ height: 0}, 200);
    $(".item5").fadeOut( 100, function() { });

    $(".item7").animate({ height: 0}, 200);
    $(".item7").fadeOut( 100, function() { });
}


function showLinks() {
    $('a').css({'opacity': 1});
    $('a').removeClass('hidden');
    $('a').addClass('links');
}
function showMobileLinks() {
    $('a').css({'opacity': 1});
    $('a').removeClass('hidden');
    $('a').addClass('links-mobile');
}


// Generatic animation function for movement
function moveItem(item, left, right, top) {
    $(item).animate({
        left: $(window).width() * left,
        top: $(window).height() * top,
        right: $(window).width() * right
    },
        400
    );
}
// Generic animation rotation function
function AnimateRotate(item, angle) {
    var $elem = $(item);
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

// Made by:
console.log(`Made by Stefan Jankovic`);
console.log(`@stjankovic`);
