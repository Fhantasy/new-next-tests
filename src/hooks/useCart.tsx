"use client";

import { ProductType } from "@/services/products";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
};

const CartContext = createContext({} as CartContextType);

export function CartContextProvider(props: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductType[]>([]);

  function addProduct(product: ProductType) {
    const updatedCart = [...cart, product];
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  function removeProduct(productId: number) {
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
