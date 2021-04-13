import React, { useContext } from "react";
import { ProductContext } from "./Context";
const Home = ({ children }) => {
  const { posts, addToCart ,cart} = useContext(ProductContext);
  console.log(cart)

  return (
    <div>
      {posts.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <button onClick={() => addToCart(item)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
