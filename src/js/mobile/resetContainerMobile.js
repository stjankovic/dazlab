import { time, normal } from './constants';
let resetContainerMobile = () => {
  $('.item')
    .stop()
    .animate({ height: $(window).height() * normal }, time - 200);
};
export default resetContainerMobile;
