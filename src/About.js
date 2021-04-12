import React, { useContext } from "react";
import { ProductContext } from "./Context";

const About = ({ children }) => {
  const { cart,setCart } = useContext(ProductContext);
  console.log(cart)
  
  const Remove=(selected)=>{
  const a=cart.indexOf(selected);
  let temp=[...cart]
  temp.splice(a,1);
    setCart(temp)
  }

  

  return (
    <div>{
      cart.map((selected)=>(
        <div>
        <h1>{selected.title}</h1>
        <button onClick={()=>Remove(selected)}>remove</button>
        </div>
      ))
    }
   

    </div>

  );
};

export default About;
