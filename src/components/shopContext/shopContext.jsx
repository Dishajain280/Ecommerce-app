import React, { createContext, useEffect, useState } from "react";

const ShopContext = createContext();

import { productsData } from "../../assets/data.jsx";
import { toast } from "react-toastify";

export { ShopContext };

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setQuantity(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
      toast.success("Product added to cart");
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart empty");
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
    toast.success("Product removed from cart");
  };

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (!cartItem) return;
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: cartItem.amount + 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        quantity,
        total,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
