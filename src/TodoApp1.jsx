import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState(""); // input value
  const [todos, setTodos] = useState([]); // list of tasks

  // handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // add new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]); // add to array
      setTask(""); // clear input
    }
  };

  // delete task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">React To-Do List ✅</h1>

      {/* Input Field */}
      <input
        type="text"
        value={task}
        onChange={handleChange} // event
        placeholder="Enter a task..."
        className="border p-2 w-full rounded"
      />

      {/* Add Button */}
      <button
        onClick={addTask} // event
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>

      {/* Task List */}
      <ol className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mt-2">
            {todo}
            <button
              onClick={() => deleteTask(index)} // event
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              ❌
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoApp;
