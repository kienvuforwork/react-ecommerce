import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existing) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existing.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existing.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const deleteCartItem = (cartItems, productToDelete) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );
  return cartItems.filter((cartItem) => cartItem.id !== existing.id);
};

export const DropdrownContext = createContext({
  show: false,
  setShow: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemsCount: 0,
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  total: 0,
});

export const DropdrownProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };
  useEffect(() => {
    const newItemsCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemsCount(newItemsCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    show,
    setShow,
    addItemToCart,
    cartItems,
    itemsCount,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  };

  return (
    <DropdrownContext.Provider value={value}>
      {children}
    </DropdrownContext.Provider>
  );
};
