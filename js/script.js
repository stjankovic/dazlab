var time = 400;
var small = 0.02;
var normal = 0.125;
var medium = 0.25;
var large = 0.70;
var reset = true;

var ccount1 = ccount2 = ccount3 = ccount4 = ccount5 = ccount6 = ccount7 = ccount8 = 0;


$(".overlay").hover(
    function() {
        reset = true;
        ccount1 = ccount2 = ccount3 = ccount4 = ccount5 = ccount6 = ccount7 = ccount8 = 0
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



$(".item1").click( 
    function() {
        reset = false;
        ccount1++;

        if(ccount1 == 1) {
            $(".item1").animate({width: $(window).width()* large}, time - 400);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount1 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount1 = 0;
            reset = true;
        }
        console.log("Call to CLICK took " + (t1 - t0) + " milliseconds.");
    }
);
$(".item2").click( 
    function() {
        reset = false;
        ccount2++;
        
        if(ccount2 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* large}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount2 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount2 = 0;
            reset = true;
        }
    }
);
$(".item3").click( 
    function() {
        reset = false;
        ccount3++;
        
        if(ccount3 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* large}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount3 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount3 = 0;
            reset = true;
        }
    }
);
$(".item4").click( 
    function() {
        reset = false;
        ccount4++;
        
        if(ccount4 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* large}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount4 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount4 = 0;
            reset = true;
        }

    }
);
$(".item5").click( 
    function() {
        reset = false;
        ccount5++;
        
        if(ccount5 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* large}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount5 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount5 = 0;
            reset = true;
        }

    }
);
$(".item6").click( 
    function() {
        reset = false;
        ccount6++;
        
        if(ccount6 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* large}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount6 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount6 = 0;
            reset = true;
        }
    }
);
$(".item7").click( 
    function() {
        reset = false;
        ccount7++;
        
        if(ccount7 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* large}, time);
            $(".item8").animate({width: $(window).width()* small}, time);
        }
        else if(ccount7 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount7 = 0;
            reset = true;
        }
    }
);
$(".item8").click( 
    function() {
        reset = false;
        ccount8++;
        
        if(ccount8 == 1) {
            $(".item1").animate({width: $(window).width()* small}, time);
            $(".item2").animate({width: $(window).width()* small}, time);
            $(".item3").animate({width: $(window).width()* small}, time);
            $(".item4").animate({width: $(window).width()* small}, time);
            $(".item5").animate({width: $(window).width()* small}, time);
            $(".item6").animate({width: $(window).width()* small}, time);
            $(".item7").animate({width: $(window).width()* small}, time);
            $(".item8").animate({width: $(window).width()* large}, time);
        }
        else if(ccount8 == 2) {
            $(".item").animate({width: $(window).width()* normal}, time - 400);
            $(".item").children().css({'opacity': 0});
            ccount8 = 0;
            reset = true;
        }
    }
);

