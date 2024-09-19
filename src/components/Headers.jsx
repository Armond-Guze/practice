import { useState } from "react";

const Headers = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (index) => {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };


  const createNewTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteAllTasks = () => {
    setTasks([])
  }

  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <h1 className="mb-12 text-[36px] font-semibold">ToDo List</h1>
      <div>
        <input
          className="border border-black p-2 pl-4 rounded mb-6"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add Task"
        />
        <button onClick={createNewTask} className="btn ml-2">
          Add Task
        </button>
        <button className="btn ml-2" onClick={deleteAllTasks}>Delete All</button>
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex border border-gray-300 p-2 rounded bg-gray-50 items-center justify-between mb-4 w-full max-w-lg"
        >
          <span>{task.name}</span>
          <div className="flex space-x-2">
            <button
              className={`rounded p-2 text-white ${
                task.completed ? "bg-green-600" : "bg-red-600"
              }`}
              onClick={() => toggleTask(index)}
            >
              {task.completed ? "Task Complete" : "Task Incomplete"}
            </button>
            <button className="btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Headers;
