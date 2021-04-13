import React, { useState, useEffect } from "react";

const About = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const retireve = localStorage.getItem("cartItems");
    var Display = JSON.parse(retireve);
    setCart(Display);
  }, []);

  const remove = index => {
    const indexes = cart.indexOf(index);
    const temp = [...cart];
    temp.splice(indexes, 1);
    setCart(temp);
    
  };


  return (
    cart.length===0?(<div>glo</div>):(<div>
      {cart.map((item,index) => (
        <div key={index}>
          <p>{item.title}</p>
          <button onClick={() => remove(index)} >Rmove</button>
        </div>
      ))}
    </div>
    )
  );
};

export default About;
