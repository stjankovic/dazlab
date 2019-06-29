// Animation time
var time = 500;


$(".item").hover(
    function(e) {
        $(this).animate({width: $(window).width()*0.6}, time);
        e.preventDefault();
        console.log('Hover in');

    },
    function(e) {
        $(this).animate({width: $(window).width()*0.125}, time);
        e.preventDefault();
        console.log('Hover out');
    }
)