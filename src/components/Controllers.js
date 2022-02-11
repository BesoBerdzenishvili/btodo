import React from 'react';
import '../style.css';
import './Controllers.css';

export default function Controllers({
  tasks,
  delAll,
  setShow,
  setShowAll,
  darkMode,
}) {
  return (
    <footer>
      <div className={darkMode ? 'InpContDark' : ''}>
        <p>{tasks.filter((task) => !task.completed).length} items left</p>
        <div>
          <ul>
            <li onClick={() => setShowAll(true)}>All</li>
            <li
              onClick={() => {
                setShow(false);
                setShowAll(false);
              }}
            >
              Active
            </li>
            <li
              onClick={() => {
                setShow(true);
                setShowAll(false);
              }}
            >
              Completed
            </li>
          </ul>
        </div>
        <p onClick={() => delAll()}>Clear completed</p>
      </div>
      <h4>Drag and drop to rerder list(?)</h4>
    </footer>
  );
}
// write drag and drop if you figure out how to do it
// for drag & drop use react draggable https://www.npmjs.com/package/react-draggable
