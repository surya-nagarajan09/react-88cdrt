import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = resp.data;
      setPosts(data);
    };
    fetch();
  }, []);
 

  const addToCart = item => {
    setCart([...cart, item]);
  };
  console.log(cart)
  return (
    <ProductContext.Provider
      value={{
        posts,
        setPosts,
        cart,
        setCart,
        addToCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ContextProvider };
