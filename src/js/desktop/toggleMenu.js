import { showItems, hideItems } from '../toggleItems';
import { setCond, cond } from './constants';
import { time, normal } from './constants';
let toggleMenu = () => {
  $('img').click(() => {
    if (cond == false) {
      setCond(true);
      $('.item')
        .stop()
        .animate({ width: $(window).width() * normal }, time - 200);
      showItems();
    } else {
      setCond(false);
      $('.item')
        .stop()
        .animate({ width: $(window).width() * normal }, time - 200);
      hideItems();
    }
  });
};

export default toggleMenu;
