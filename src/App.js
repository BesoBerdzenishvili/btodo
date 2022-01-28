import React, { useState } from 'react';
import Controllers from './components/Controllers.js';
import Input from './components/Input.js';
import Switch from './components/Switch.js';
import Tasks from './components/Tasks.js';
import './style.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <header>
        <h1>TODO</h1>
        <Input />
        <Switch />
      </header>
      <Tasks />
      <Controllers />
    </div>
  );
}
