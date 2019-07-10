import { showItems, hideItems } from './toggleItems';
import { setCond, cond } from './constants';

let toggleMenu = () => {
  $('img').click(() => {
    if (cond == false) {
      setCond(true);
      showItems();
    } else {
      setCond(false);
      hideItems();
    }
  });
};

export default toggleMenu;
