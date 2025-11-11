import { Product } from "./models/product.js";
import { Cart } from "./models/cart.js";
import { formatPrice, formatDate } from "./utils/formatter.js";

const p1 = new Product("Phone", 500, 10);
const p2 = new Product("Laptop", 1200, 5);

const cart = new Cart();
cart.addProduct(p1);
cart.addProduct(p2);

console.log("Items:", cart.getItemCount());
console.log("Total:", formatPrice(cart.getTotal()));
console.log("Date:", formatDate(new Date()));
