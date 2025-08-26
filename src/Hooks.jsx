import React, { useState } from "react";

const Hooks = () => {
  const [city, setCity] = useState("Hyderabad");
  const [fruit, setFruit] = useState("Mango");

  const changeValues = () => {
    setCity("Delhi");
    setFruit("Apple");
  
    console.log("Values updated!");
    
    
  };

  return (
    <div>
      <h2>I'm hooks component</h2>
      <h3>
        City: {city} | Fruit: {fruit}
      </h3>
      <button onClick={changeValues}>Change Values</button>

    </div>
  );
};

export default Hooks;
