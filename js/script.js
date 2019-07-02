var time = 400;
var small = 0.02;
var normal = 0.125;
var medium = 0.25;
var large = 0.70;
var reset = true;

var ccount1 = 0;


$(".overlay").hover(
    function() {
        reset = true;
        ccount1 = 0;
        $(".item").stop().animate({width: $(window).width()* normal}, time - 100);
        $(".item").children().css({'opacity': 0});
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
        reset = false;
        ccount1++;
        if(ccount1 == 1) {
            $(".item").stop().animate({width: $(window).width()* small}, time - 200);
            $(this).stop().animate({width: $(window).width()* large}, time - 200);
        }
        else if(ccount1 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 200);
            $(".item").children().css({'opacity': 0});
            ccount1 = 0;
            reset = true;
        }
    }
);
