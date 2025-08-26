import React from 'react'

function Mousehover() {

    const handleMouseOut=()=>{
        alert("Mouse entered area");
        
    };

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    console.log(event.key, "is being held down!");
  }
});





  return (
    <div>
     
       
    </div>
  )
}

export default Mousehover
