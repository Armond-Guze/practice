import React from "react";
import { useState } from "react";

const Headers = () => {
  const [tasks, setTask] = useState([
    { name: "Walk the dog", completed: true },
  ]);
  const [newTask, setNewtask] = useState("");

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  const createNewTask = () => {
    if (newTask !== "") {
      const updatedTasks = [...tasks, { name: newTask, completed: false }];
      setTask(updatedTasks);
      setNewtask("");
    }
  };

  return (
    <div className="justify-center flex flex-col items-center">
      <h1 className="text-[50px] font-semibold">ToDo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewtask(e.target.value)}
          placeholder="Add new task.."
          className="bg-black rounded p-2 text-white"
        />
        <button
          className="bg-black text-white p-2 ml-2 rounded"
          onClick={createNewTask}
        >
          NewTask
        </button>
      </div>

      {tasks.map((task, index) => (
        <ul key={index} className="flex items-center mb-2">
          <div className="flex items-center mt-4 space-x-2">
            {task.name}
            <button className={`btn ml-2 ${task.completed ? 'bg-green-500' : 'bg-red-500'}`} onClick={() => toggleTask(index)}>
              {task.completed ? "Complete" : "Incomplete"}
            </button>
            <button className="btn ml-2" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Headers;
