export class Product {
  constructor(name, price, discount = 0) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getDiscount() {
    return this.discount;
  }
}
