import { cond, time, normal, medium } from './constants';

let itemHover = () => {
  $('.item').hover(
    function() {
      if (cond == false) {
        $('.item')
          .stop()
          .animate({ width: $(window).width() * normal }, time);
        $(this)
          .stop()
          .animate({ width: $(window).width() * medium }, time);
      }
    },
    function() {
      if (cond == false) {
        $(this).removeClass('item-hover');
        $('.item')
          .stop()
          .animate({ width: $(window).width() * normal }, time);
      }
    }
  );
};

export default itemHover;
