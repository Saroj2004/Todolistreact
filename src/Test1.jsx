import React from 'react'

const Test1 = (props) => {
    const{model,brand,color,year}=props.car
    console.log(props.car);
  return (
    <div>
      <h2>model{model}| brand{brand}| color{color} | year{year}</h2>
    </div>
  )
}

export default Test1
