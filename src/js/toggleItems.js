let n = 8;

let showItems = () => {
  for (let i = 1; i <= n; i++) {
    $('.item' + i + ' span').removeClass('hidden');
    $('.item' + i + ' span').addClass('visible');
    $('.item' + i + ' span').animate({ opacity: 1 }, 500);
  }
};

let hideItems = () => {
  for (let i = 1; i <= n; i++) {
    $('.item' + i + ' span').animate({ opacity: 0 }, 500);
  }
};

export { showItems, hideItems };
