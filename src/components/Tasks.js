import React from 'react';
import '../style.css';
import './Tasks.css';

export default function Tasks({ index, task }) {
  return (
    <main>
      <article>
        <button>check</button>
        <p style={{ textDecoration: task.completed && 'line-through' }}>
          {task.text}
        </p>
        <button>X</button>
      </article>
    </main>
  );
}
