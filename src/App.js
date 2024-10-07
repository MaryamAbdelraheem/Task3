import React, { useState } from 'react';
import './App.css';


function App() {
  

  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Handle input change for new task
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle adding new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Handle deleting a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
        <div className="todo-container">
            <h1>To-Do List</h1>

            {/* Input field for new tasks */}
            <div className="input-container">
              <input 
                type="text" 
                value={newTask} 
                onChange={handleChange} 
                placeholder="Add a new task"
              />
              <button onClick={addTask}>Add Task</button>
            </div>

            {/* Task list */}
            <ul className="task-list">
                {tasks.map((task, index) => (
                <li key={index}>
                      {task}
              <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
        </div>
      
  );
    
}

export default App;
