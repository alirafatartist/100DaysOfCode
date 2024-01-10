const formatMoney = (m) => {
  return Number.isInteger(m) ? `$${m.toFixed(2)}` : `$${m}`;
};
console.log(formatMoney(39)); //$39.00
console.log(formatMoney(39.99)); //$39.99
