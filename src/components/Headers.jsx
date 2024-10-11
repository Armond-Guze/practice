import React, { useState } from "react";

const tasksArray = [{ name: "armond", complete: true }];
const Headers = () => {
  const [tasks, setTask] = useState(tasksArray);

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
  );
    setTask(updatedTasks);
  };

  return <div>{tasks.map((task, index) => (
    <div key={index}>
      {task.name}
      {task.completed ? "Completed" : "Incomplete"}
    </div>
  ))}</div>;
};

export default Headers;
