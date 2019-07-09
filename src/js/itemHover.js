import { cond, time, normal, medium } from './constants';
let c = cond;
let n = 8;

console.log(`Start: ${c}`);

let showItems = () => {
  for (let i = 1; i <= n; i++) {
    $('.item' + i + ' a').removeClass('hidden');
    $('.item' + i + ' a').addClass('visible');
    $('.item' + i + ' a').animate({ opacity: 1 }, 500);
  }
};

let hideItems = () => {
  for (let i = 1; i <= n; i++) {
    $('.item' + i + ' a').animate({ opacity: 0 }, 500);
    // $('.item' + i + ' a').removeClass('visible');
    // $('.item' + i + ' a').addClass('hidden');
  }
};
let toggleMenu = () => {
  $('img').click(() => {
    if (c == false) {
      c = true;
      showItems();
    } else {
      c = false;
      hideItems();
    }
  });
};

let itemHover = () => {
  $('.item').hover(
    function() {
      if (c == false) {
        $('.item')
          .stop()
          .animate({ width: $(window).width() * normal }, time);
        $(this)
          .stop()
          .animate({ width: $(window).width() * medium }, time);
      }
    },
    function() {
      if (c == false) {
        $(this).removeClass('item-hover');
        $('.item')
          .stop()
          .animate({ width: $(window).width() * normal }, time);
      }
    }
  );
};

toggleMenu();
export default itemHover;
