export function calculateTax(amount, percent) {
  return (amount * percent) / 100;
}

export function calculateDiscount(price, percent) {
  return price - (price * percent) / 100;
}
