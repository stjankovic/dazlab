// Animation time
var time = 300;
var small = 0.01;
var large = 0.70;
var active = false;
var delay = 50;

// Item 1
$(".item1").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* large}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 2
$(".item2").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* large}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 3
$(".item3").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* large}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 4
$(".item4").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* large}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 5
$(".item5").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* large}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 6
$(".item6").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* large}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 7
$(".item7").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* large}, time);
                $(".item8").animate({width: $(window).width()* small}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
// Item 7
$(".item7").hover(
    function(e) {
        if(active == false) {
            active = true;
            setTimeout( function() {
                $(".item1").animate({width: $(window).width()* small}, time);
                $(".item2").animate({width: $(window).width()* small}, time);
                $(".item3").animate({width: $(window).width()* small}, time);
                $(".item4").animate({width: $(window).width()* small}, time);
                $(".item5").animate({width: $(window).width()* small}, time);
                $(".item6").animate({width: $(window).width()* small}, time);
                $(".item7").animate({width: $(window).width()* small}, time);
                $(".item8").animate({width: $(window).width()* large}, time);
            }, delay);
        }
    },
    function(e) {
        active = false;
    }
);
