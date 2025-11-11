import { calculateTax, calculateDiscount } from "../utils/calculator.js";

export class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(name) {
    this.products = this.products.filter(p => p.getName() !== name);
  }
  getItemCount() {
    return this.products.length;
  }
  getTotal() {
    let total = this.products.reduce((sum, p) => {
      let price = calculateDiscount(p.getPrice(), p.getDiscount());
      return sum + price;
    }, 0);
    total += calculateTax(total, 12);
    return total;
  }
}
