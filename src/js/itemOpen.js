import { small, large, time } from './constants';
import delay from './delay';
let itemOpen = () => {
  $('.item').click(function() {
    delay(0).then(() => {
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
  });
};
export default itemOpen;
