import { setItem, setCond, cond, small, large, time } from './constants';
import { hideItems } from '../toggleItems';
import delay from '../delay';

let itemOpen = () => {
  $('.item').click(function() {
    setItem(true);
    if (cond == true) {
      setCond(false);
      hideItems();
      delay(500).then(() => {
        $('.item span').removeClass('visible');
        $('.item span').addClass('hidden');
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
      $('.item span').removeClass('visible');
      $('.item spaspan').addClass('hidden');
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
