// src/data/products.js

// Men images
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import men6 from "../assets/men6.jpg";
import men7 from "../assets/men7.jpg";
import trending1 from "../assets/trending1.jpg";

// Women images
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";
import women6 from "../assets/sale4.jpg"; // reuse sale4

// Trending images
import trending2 from "../assets/trending2.jpg";
import trending3 from "../assets/trending3.jpg";
import trending4 from "../assets/trending4.jpg";
import trending5 from "../assets/trending5.jpg";

// Sale images
import sale1 from "../assets/sale1.jpg";
import sale2 from "../assets/sale2.jpg";
import sale3 from "../assets/sale3.jpg";
import sale5 from "../assets/sale5.jpg";

export const products = {
  men: [
    { id: 1, name: "Black Jacket", price: 1299, image: men1 },
    { id: 2, name: "Traditional Kurta Men", price: 899, image: men2 },
    { id: 3, name: "Casual Men Shirt", price: 899, image: men3 },
    { id: 4, name: "Baggy Blue Jeans", price: 1399, image: men4 },
    { id: 5, name: "Cream Sweatshirt", price: 899, image: men5 },
    { id: 6, name: "Casual White Shirt", price: 499, image: men6 },
    { id: 7, name: "Formal Shoes Men", price: 1999, image: men7 },
    { id: 8, name: "Oversized Hoodie", price: 999, image: trending1 },
  ],

  women: [
    { id: 1, name: "Blue Denim", price: 1499, image: women1 },
    { id: 2, name: "Classy Grey Hoodie", price: 899, image: women2 },
    { id: 3, name: "Printed Kurti", price: 1199, image: women3 },
    { id: 4, name: "White Trouser", price: 799, image: women4 },
    { id: 5, name: "Red Dress", price: 1999, image: women5 },
    { id: 6, name: "Pink Denim Jacket", price: 999, image: women6 },
  ],

  trending: [
    { id: 1, name: "Oversized Hoodie", price: 999, image: trending1 },
    { id: 2, name: "White Trouser", price: 899, image: trending2 },
    { id: 3, name: "Leather Boots", price: 2499, image: trending3 },
    { id: 4, name: "Watch", price: 1999, image: trending4 },
    { id: 5, name: "40L Laptop Bag", price: 799, image: sale2 },
    { id: 6, name: "Women Sneaker", price: 1899, image: trending5 },
  ],

  sale: [
    { id: 1, name: "Pista Green Dress", price: 499, image: sale5 },
    { id: 2, name: "Wired Headphones", price: 699, image: sale1 },
    { id: 3, name: "40L Laptop Bag", price: 799, image: sale2 },
    { id: 4, name: "Formal Sky Blue Shirt", price: 399, image: sale3 },
    { id: 5, name: "Watch", price: 1999, image: trending4 },
    { id: 6, name: "Pink Denim Jacket", price: 999, image: women6 },
  ],
};
