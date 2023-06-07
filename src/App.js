import React, { useState } from "react";
import "./App.css";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    // Return all tasks or only completed/incomplete tasks based on filter
    console.log(task);
    return true; // Replace with desired filter condition
  });

  return (
    <div className="good">
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <br /> <button onClick={addTask}>Add Task</button>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
