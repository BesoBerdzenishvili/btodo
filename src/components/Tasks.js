import React, { useState } from 'react';
import '../style.css';
import './Tasks.css';

export default function Tasks({ index, task, delTask, editTask }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    console.log(value, 'Val')
    e.preventDefault();
    if (!value) return;
    editTask(value);
    setValue('');
  };
  return (
    <main>
      <article>
        <button>Check</button>
        <p style={{ textDecoration: task.completed && 'line-through' }}>
          {task.text}
        </p>
        <form onClick={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <button onClick={() => delTask(index)}>X</button>
      </article>
    </main>
  );
}
