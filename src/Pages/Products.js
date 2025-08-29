// src/data/products.js
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import men6 from "../assets/men6.jpg";
import men7 from "../assets/men7.jpg";
import trending1 from "../assets/trending1.jpg";

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
    { id: 1, name: "Blue Denim", price: 1499, image: "src/assets/women1.jpg" },
    { id: 2, name: "Classy Grey Hoodie", price: 899, image: "src/assets/women2.jpg" },
    { id: 3, name: "Printed Kurti", price: 1199, image: "src/assets/women3.jpg" },
    { id: 4, name: "White Trouser", price: 799, image: "src/assets/women4.jpg" },
    { id: 5, name: "Red Dress", price: 1999, image: "src/assets/women5.jpg" },
    { id: 6, name: "Pink Denim Jacket", price: 999, image: "src/assets/sale4.jpg"}
  ],
  trending: [
    { id: 1, name: "Oversized Hoodie", price: 999, image: "src/assets/trending1.jpg" },
    { id: 2, name: "White Trouser", price: 899, image: "src/assets/trending2.jpg" },
    { id: 3, name: "Leather Boots", price: 2499, image: "src/assets/trending3.jpg" },
    { id: 4, name: "Watch", price: 1999, image: "src/assets/trending4.jpg" },
    { id: 5, name: "40L Laptop Bag", price: 799, image: "src/assets/sale2.jpg"},
    { id: 6, name: "Women Sneaker", price: 1899, image: "src/assets/trending5.jpg"}
  ],
  sale: [
    { id: 1, name: "Pista Green Dress", price: 499, image: "src/assets/sale5.jpg"},
    { id: 2, name: "Wired Headphones", price: 699, image: "src/assets/sale1.jpg"},
    { id: 3, name: "40L Laptop Bag", price: 799, image: "src/assets/sale2.jpg"},
    { id: 4, name: "Formal Sky Blue Shirt", price: 399, image: "src/assets/sale3.jpg"},
    { id: 5, name: "Watch", price: 1999, image: "src/assets/trending4.jpg" },
    { id: 6, name: "Pink Denim Jacket", price: 999, image: "src/assets/sale4.jpg"}

  ]

};

