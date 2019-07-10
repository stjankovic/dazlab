import { setCond, cond, small, large, time } from './constants';
import { hideItems } from '../toggleItems';
import delay from '../delay';

let itemOpen = () => {
  $('.item').click(function() {
    if (cond == true) {
      setCond(false);
      hideItems();
      delay(500).then(() => {
        $('.item a').removeClass('visible');
        $('.item a').addClass('hidden');
        $(this)
          .children()
          .css({ opacity: 1 });
        $('.item')
          .stop()
          .animate({ width: $(window).width() * small }, time);
        $(this)
          .stop()
          .animate({ width: $(window).width() * large }, time);
      });
    } else {
      $('.item a').removeClass('visible');
      $('.item a').addClass('hidden');
      $(this)
        .children()
        .css({ opacity: 1 });
      $('.item')
        .stop()
        .animate({ width: $(window).width() * small }, time);
      $(this)
        .stop()
        .animate({ width: $(window).width() * large }, time);
    }
  });
};
export default itemOpen;
