import React from 'react'
import { useState } from 'react'


function Formevent() {

    const[userName,setUserName]=useState("");
    const[details,setDetails] =useState("");

    const getUsername=(e)=>{
        setUserName(e.target.value)
        console.log(userName)
    }

    const getDetails=()=>{
        setDetails(userName);
        console.log("done")


    }

  return (
    <div>
    


    <h2>Im FormEvent</h2>
    <h2>{details}</h2>
    <input type="text" placeholder="enter name" onChange={getUsername} ></input>
   
    <button onClick={getDetails}>Submit</button>

    </div>
  )
}

export default Formevent
