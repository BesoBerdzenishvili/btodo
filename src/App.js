import React, { useState, useEffect } from 'react';
import Controllers from './components/Controllers.js';
import Input from './components/Input.js';
import Switch from './components/Switch.js';
import Tasks from './components/Tasks.js';
import data from './data.json';
import './style.css';

export default function App(props) {
  //import data(tasks) from data.json
  const panels = data.tasks;
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : panels;
  });
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(true);
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  // add new task
  const newTask = (text) => {
    const newTasks = [...tasks, { text, completed: false }];
    setTasks(newTasks);
  };
  // edit task
  const editTask = (value, index) => {
    const old = [...tasks];
    const newTasks = (old[index].text = value);
    console.log(value, index, 'poison');
    setTasks(newTasks);
  };
  // delete individual task
  const delTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  // delete all task (delTasks)
  const delAll = () => {
    const newTasks = [...tasks];
    const checked = newTasks.filter((i) => !i.completed);
    setTasks(checked);
  };
  // toggle completed
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed
      ? (newTasks[index].completed = false)
      : (newTasks[index].completed = true);
    setTasks(newTasks);
  };
  // toggle darkMode
  return (
    <div>
      <header>
        <h1>TODO</h1>
        <Input newTask={newTask} />
        <Switch />
      </header>
      {tasks.map((task, index) => (
        <Tasks
          key={index}
          index={index}
          task={task}
          delTask={delTask}
          editTask={editTask}
          completeTask={completeTask}
          show={show}
          showAll={showAll}
        />
      ))}
      <Controllers
        tasks={tasks}
        delAll={delAll}
        setShow={setShow}
        setShowAll={setShowAll}
      />
    </div>
  );
}
// See if possible to toggle darkMode, showActives, showCompleted, showActives from onClick functions
