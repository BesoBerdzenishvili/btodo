import React from 'react';
import '../style.css';
import './Controllers.css';

export default function Controllers() {
  return (
    <footer>
      <div>
        <p>4 items left</p>
        <div>
          <ul>
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </div>
        <p>Clear completed</p>
      </div>
      <h4>Drag and drop to rerder list(?)</h4>
    </footer>
  );
}
// write drag and drop if you figure out how to do it
