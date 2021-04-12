import React, { useContext } from "react";
import { ProductContext } from "./Context";
const Home = ({children}) => {
  const { posts, cart, setCart} = useContext(ProductContext);


  const addToCart=(item)=>{
    setCart([...cart,item])

  }
  return (
    <div>
      {posts.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <button onClick={()=>addToCart(item)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
