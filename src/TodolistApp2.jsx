import React, { useState } from 'react'
import "./TodolistApp2.css";

const TodolistApp2 = () => {

  const [input, setInput] = useState(""); 
  const [list, setList] = useState([]); 
  const [message, setMessage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // method to read value
  const reading = (e) => {  
    setInput(e.target.value);
  }

  // Add or Update function
  const addOrUpdate = () => {
    if (input.trim() === "") {
      setMessage("Can't add empty values");
      alert(message);
      return;
    }

   if (editIndex !== null) {
      // Update existing item
      const updatedList = [...list];
      updatedList[editIndex] = input;
      setList(updatedList);
      setEditIndex(null); // reset editIndex
    } else {
      // Add new item
      setList([...list, input]);
    }

    setInput(""); // clear input after add/update
  }

  
  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  }

  const handleEditClick = (index) => {
    setInput(list[index]); // Fill input with selected item
    setEditIndex(index);   // Save index of item being edited
  };

  return (
    <div>
      <div className="inputsec">
        <h1 className='heading'>Todolist Webapplication</h1> 
        <input 
          className='inputarea' 
          type='text' 
          placeholder='Enter task' 
          value={input}
          onChange={reading}
        />
        <button className='add-btn' onClick={addOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span className="list-text">{item}</span>
            <button onClick={() => handleDelete(index)} className="remove-btn">X</button>
            <button className="edit-btn">
              <img 
                className='edit-img' 
                width={39} 
                src="pepicons-pencil--pen-circle.svg" 
                onClick={() => handleEditClick(index)} 
                alt="Edit" 
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodolistApp2;
