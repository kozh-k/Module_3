var regex = /\d(?=(\d{3})+$)/g;

function addCommas(money, reg) {
   return money.replace(reg, (x) => x + ",");
}
