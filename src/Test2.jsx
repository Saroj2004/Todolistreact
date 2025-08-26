import React, { Component } from 'react'
import './Test2.css'

export class Test2 extends Component {

  constructor(props){
    super(props)
    this.state={
      count:0
    }
  };


  add=()=>{
    this.setState({count:this.state.count+1})
    console.log(this.state.count);
  };

  minus=()=>{
    this.setState({count:this.state.count-1})
     console.log(this.state.count);
  };

  
  handleonClick=()=>{
    console.log("clicked")
  }
   
  render() {
    return (
      <div>
      <h1>Hi there im test2 component</h1>
      <h2>Count Value: {this.state.count}</h2>
      <button onClick={this.add}>Add</button>
      <button disabled={this.state.count===0} onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default Test2
