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

// 
if(width >= 800) {
    fullWidth();
}
else {
    mobileWidth();
}

//All of the functions for Mobile screens;
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
        }
    );
}
//All of the functions for Desktop screens;
function fullWidth() {
    $(".overlay").hover(
        function() {
            reset = true;
            count = 0;
            $(".item").animate({width: $(window).width()* normal}, time - 100);
            $(".item").children().css({'opacity': 0});
            $(".item").clearQueue();
        }
    )
    $(".item").hover(
        function() {
            if(reset == true) {
                $(this).stop().animate({width: $(window).width()* medium}, time - 100);
                $(".item").children().css({'opacity': 0});
            }
        },
        function() {
            if(reset == true) {
                $(this).stop().animate({width: $(window).width()* normal}, time - 100);
                $(".item").children().css({'opacity': 0});
            }
        }
    )
    $(".item").click(
        function() {
            $(".item").children().css({'opacity': 0});
            $(this).children().css({'opacity': 1});
            
        }
    )
    $(".item").click( 
        function() {
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
    );
}