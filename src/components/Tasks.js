import React, { useState } from 'react';
import '../style.css';
import './Tasks.css';

export default function Tasks({
  index,
  task,
  delTask,
  editTask,
  completeTask,
  show,
  showAll
}) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    console.log(value, 'Val');
    e.preventDefault();
    if (!value) return;
    editTask(value, index);
    setValue('');
  };
  return (
    <main>
      <article id={showAll ? 'show' : ''} className={(show && task.completed||(!show && !task.completed)) ? 'show' : 'hide'}>
        <button onClick={() => completeTask(index)}>
          <img
            src={
              task.completed
                ? 'https://www.freeiconspng.com/uploads/black-checkmark-png-10.png'
                : 'https://i.stack.imgur.com/yVXkk.png'
            }
            width="19px"
            alt="check mark"
          />
        </button>
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
