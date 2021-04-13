import React, { useContext,useState,use } from "react";
import { ProductContext } from "./Context";

const About = ({ children }) => {
  const { cart } = useContext(ProductContext);
  const[cartDisplay,setcartDisplay]=useState([])
//   const Remove=(selected)=>{
//   const a=cart.indexOf(selected);
//   let temp=[...cart]
//   temp.splice(a,1);
//     setCart(temp)
//   }
// console.log(cart)
const retrieve=localStorage.getItem("cartItems");
 setcartDisplay(JSON.parse(retrieve))
console.log(cartDisplay)

use

  

  return (
    <div>{
      cartDisplay.map((selected)=>(
        <div>
        <h1>{selected.title}</h1>
        <button >remove from count</button>
        </div>
      ))
    }
   

    </div>

  );
};

export default About;
