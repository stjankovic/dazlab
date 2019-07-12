import { setItem, time, normal } from './constants';
let resetContainer = () => {
  $('.overlay').hover(function() {
    setItem(false);
    $('.item')
      .stop()
      .animate({ width: $(window).width() * normal }, time - 200);
  });
};
export default resetContainer;
