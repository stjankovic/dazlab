import '../scss/index.scss';
import itemOpen from './desktop/itemOpen';
import itemOpenMobile from './mobile/itemOpenMobile';
import resetContainer from './desktop/resetContainer';
import resetContainerMobile from './mobile/resetContainerMobile';
import itemHover from './desktop/itemHover';
import toggleMenu from './desktop/toggleMenu';
import toggleMenuMobile from './mobile/toggleMenuMobile';

const width = $(window).width();

if (width >= 800) {
  toggleMenu();
  itemOpen();
  resetContainer();
  itemHover();
} else {
  toggleMenuMobile();
  itemOpenMobile();
  resetContainerMobile();
}
