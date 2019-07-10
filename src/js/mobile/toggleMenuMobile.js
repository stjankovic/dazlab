import { showItems, hideItems } from '../toggleItems';
import { setCond, cond } from './constants';
import resetContainerMobile from './resetContainerMobile';

let toggleMenu = () => {
  $('img').click(() => {
    if (cond == false) {
      resetContainerMobile();
      setCond(true);
      showItems();
    } else {
      resetContainerMobile();
      setCond(false);
      hideItems();
    }
  });
};

export default toggleMenu;
