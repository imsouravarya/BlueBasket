import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // ✅ Add item to cart
  const addToCart = (item) => {
    // check if item already exists
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // just increase quantity
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // add new item with quantity = 1
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }

    setCartCount((prev) => prev + 1);
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (!itemToRemove) return;

    setCartItems(cartItems.filter((item) => item.id !== id));
    setCartCount((prev) => prev - itemToRemove.quantity);
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  // ✅ Increase quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCartCount((prev) => prev + 1);
  };

  // ✅ Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );

    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      setCartCount((prev) => prev - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
