import React from 'react';
import '../style.css';
import './Controllers.css';

export default function Controllers({ tasks, delAll, setShow, setShowAll }) {
  return (
    <footer>
      <div>
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
// add setShowAll(false) to Active & completed
