import { setCond, cond, small, large, time } from './constants';
import { hideItems } from '../toggleItems';
import delay from '../delay';

let itemOpenMobile = () => {
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
          .animate({ height: $(window).height() * small }, time);
        $(this)
          .stop()
          .animate({ height: $(window).height() * large }, time);
      });
    } else {
      $('.item a').removeClass('visible');
      $('.item a').addClass('hidden');
      $(this)
        .children()
        .css({ opacity: 1 });
      $('.item')
        .stop()
        .animate({ height: $(window).height() * small }, time);
      $(this)
        .stop()
        .animate({ height: $(window).height() * large }, time);
    }
  });
};
export default itemOpenMobile;
