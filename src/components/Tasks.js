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
  showAll,
  darkMode,
}) {
  const [value, setValue] = useState(task.text);
  const [display, setDisplay] = useState(true);
  const sendSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    editTask(value, index);
    setValue(task.text);
    setDisplay(true);
  };
  return (
    <div className={darkMode ? 'tasksDark big' : 'tasksLight big'}>
      <article
        id={showAll ? 'show' : ''}
        className={
          (show && task.completed) || (!show && !task.completed)
            ? 'show'
            : 'hide'
        }
      >
        <button onClick={() => completeTask(index)} className="check">
          <img
            id="mmm"
            src={
              task.completed
                ? 'https://upload.wikimedia.org/wikipedia/commons/2/27/White_check.svg'
                : 'https://i.stack.imgur.com/yVXkk.png'
            }
            width="19px"
            alt="check mark"
          />
        </button>
        {display ? (
          <p
            className="taskText"
            onDoubleClick={() => setDisplay(false)}
            style={{ textDecoration: task.completed && 'line-through' }}
          >
            {task.text}
          </p>
        ) : (
          <form onBlur={() => setDisplay(true)} onSubmit={sendSubmit}>
            <input
              autoFocus
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        )}

        <button className="delBtn" onClick={() => delTask(index)}>
          X
        </button>
      </article>
      <hr />
    </div>
  );
}
