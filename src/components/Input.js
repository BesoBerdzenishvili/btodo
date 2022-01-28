import React, { useState } from 'react';
import '../style.css';
import './Input.css';

export default function Input({ newTask }) {
  const [value, setValue] = useState('');
  // toggle check
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    newTask(value);
    setValue('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
