import React, { useState } from 'react'


const Singleclick = () => {
  const [count, setCount] = useState(0);
  const [Message, setMessage] = useState("");

  const incrementbtn = () => {
    setCount(count + 1);
     setMessage("");
  };

  const decrementbtn = () => {
    if(count>0){   setCount(count - 1);}
     setMessage("");
 
  };

  const resetbtn = () => {
    setCount(0);
   setMessage("Count values reset!");
   console.log("Count values reset!");

  };

  return (
    <div>
      <h2>Hi im SingleClickevent</h2>
      <h3>Count-Value: {count}</h3>
      <button onClick={incrementbtn}>Increment</button>
      <button onClick={decrementbtn}>Decrement</button>
      <button onClick={resetbtn}>Reset</button>

    {Message &&<h4>{Message}</h4>}
     
    </div>
  );
};

export default Singleclick;
