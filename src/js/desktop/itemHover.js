import {
  itemCond,
  cond,
  time,
  normal,
  medium,
  smedium,
  lmedium,
} from './constants';

let itemHover = () => {
  $('.item').hover(
    function() {
      let idItem = Number.parseInt(this.id, 10);
      let nextidItem = idItem + 1;
      let previdItem = idItem - 1;

      if (cond == false && itemCond == false) {
        if (idItem == 1) {
          $('#' + idItem)
            .stop()
            .animate({ width: $(window).width() * medium }, time);
          $('#' + nextidItem)
            .stop()
            .animate({ width: $(window).width() * smedium }, time);
        } else if (idItem < 8) {
          $('#' + idItem)
            .stop()
            .animate({ width: $(window).width() * lmedium }, time);
          $('#' + previdItem)
            .stop()
            .animate({ width: $(window).width() * smedium }, time);

          $('#' + nextidItem)
            .stop()
            .animate({ width: $(window).width() * smedium }, time);
        } else {
          $('#' + idItem)
            .stop()
            .animate({ width: $(window).width() * medium }, time);
          $('#' + previdItem)
            .stop()
            .animate({ width: $(window).width() * smedium }, time);
        }
      }
    },
    function() {
      if (cond == false && itemCond == false) {
        $('.item')
          .stop()
          .animate({ width: $(window).width() * normal }, time);
      }
    }
  );
};

export default itemHover;
