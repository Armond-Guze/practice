import React from 'react'
import { useState } from 'react'

const Headers = () => {
  const [tasks, setTasks] = useState()

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks)
  }

  return (
    <div>Headers</div>
  )
  // 
  // sf
}

export default Headers