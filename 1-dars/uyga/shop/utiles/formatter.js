export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US").format(date);
}
