let time = 700;
let small = 0.02;
let normal = 0.1;
let smedium = 0.08;
let medium = 0.12;
let lmedium = 0.14;
let large = 0.66;
let cond = false;
let itemCond = false;

let setCond = value => {
  cond = value;
};

let setItem = value => {
  itemCond = value;
};

export {
  setItem,
  setCond,
  itemCond,
  time,
  small,
  normal,
  medium,
  lmedium,
  smedium,
  large,
  cond,
};
