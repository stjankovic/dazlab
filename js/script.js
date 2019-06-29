// Animation time
var time = 300;
var small = 0.01;
var large = 0.70;
var reset = true;

$(".overlay").hover(
    function() {
        reset = true;
        $(".item").animate({width: $(window).width()* 0.125}, time);
    }
)
$(".item").hover(
    function() {
        if(reset == true) {
            $(this).animate({width: $(window).width()* 0.2}, time);
        }
    },
    function() {
        if(reset == true) {
            $(".item").animate({width: $(window).width()* 0.125}, time);
        }
    }
)

$(".item1").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* large}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item2").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* large}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item3").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* large}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item4").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* large}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item5").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* large}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item6").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* large}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item7").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* large}, time);
        $(".item8").animate({width: $(window).width()* small}, time);
    }
);
$(".item8").click( 
    function() {
        reset = false;
        $(".item1").animate({width: $(window).width()* small}, time);
        $(".item2").animate({width: $(window).width()* small}, time);
        $(".item3").animate({width: $(window).width()* small}, time);
        $(".item4").animate({width: $(window).width()* small}, time);
        $(".item5").animate({width: $(window).width()* small}, time);
        $(".item6").animate({width: $(window).width()* small}, time);
        $(".item7").animate({width: $(window).width()* small}, time);
        $(".item8").animate({width: $(window).width()* large}, time);
    }
);

