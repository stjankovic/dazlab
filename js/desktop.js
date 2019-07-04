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

export default fullWidth;