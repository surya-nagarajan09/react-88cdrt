import React, { useContext } from "react";
import { ProductContext } from "./Context";

const About = ({ children }) => {
  const { cart } = useContext(ProductContext);
//   const Remove=(selected)=>{
//   const a=cart.indexOf(selected);
//   let temp=[...cart]
//   temp.splice(a,1);
//     setCart(temp)
//   }
// console.log(cart)
console.log(cart)
  

  return (
    <div>{
      cart.map((selected)=>(
        <div>
        <h1>{selected.title}</h1>
        <button ></button>
        </div>
      ))
    }
   

    </div>

  );
};

export default About;
