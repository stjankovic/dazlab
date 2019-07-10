import { time, normal } from './constants';
let resetContainer = () => {
  $('.overlay').hover(function() {
    $('.item')
      .stop()
      .animate({ width: $(window).width() * normal }, time - 200);
  });
  return true;
};
export default resetContainer;
