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
  const [show, setShow] = useState(false);
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <header>
        <h1>TODO</h1>
        <Input />
        <Switch />
      </header>
      {tasks.map((task, index) => (
        <Tasks key={index} index={index} task={task} />
      ))}
      <Controllers />
    </div>
  );
}
