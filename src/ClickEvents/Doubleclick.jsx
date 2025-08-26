import React, { useState } from 'react'


const Doubleclick = () => {
  const [count, setCount] = useState(0);
  const [Message, setMessage] = useState("");
  const[dec,setDec] =useState("");

  const incrementbtn = () => {
    setCount(count + 1);
     setMessage("");
  };

  const decrementbtn = () => {
    if(count>0){   setCount(count - 1);
        
    }
    else{
        setDec("cant be less than 0");
         
    }
  setMessage("");
   
 
  };

  const resetbtn = () => {
   
    setCount(0);
   setMessage("Count values reset!");
   console.log("Count values reset!");

  };

   const handleDoubleClick = () => {
    alert("Double clicked!");
  };
  return (
    <div>
      <h2>Hi im SingleClickevent</h2>
      <h3>Count-Value: {count}</h3>
       <button onDoubleClick={handleDoubleClick}>HAI</button>
      <button onDoubleClick={incrementbtn}>Increment</button>
      <button onDoubleClick={decrementbtn}>Decrement</button>
      <button onDoubleClick={resetbtn}>Reset</button>
     

    {Message &&<h4>{Message}</h4>}
    {dec && <h3>{dec}</h3>}
    
     
    </div>
  );
};

export default Doubleclick;
