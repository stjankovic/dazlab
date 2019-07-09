let n = 8;

let showItems = () => {
  for (let i = 1; i <= n; i++) {
    $('.item' + i + ' a').removeClass('hidden');
    $('.item' + i + ' a').addClass('visible');
    $('.item' + i + ' a').animate({ opacity: 1 }, 500);
  }
};

let hideItems = () => {
  for (let i = 1; i <= n; i++) {
    // $('.item' + i + ' a').removeClass('visible');
    // $('.item' + i + ' a').addClass('hidden');
    $('.item' + i + ' a').animate({ opacity: 0 }, 500);
  }
};

export { showItems, hideItems };
