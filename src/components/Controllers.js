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
      <div className={darkMode ? 'InpContDark footCont' : 'footCont'}>
        <p>{tasks.filter((task) => !task.completed).length} items left</p>
        <div className={darkMode ? 'InpContDark allActCom' : 'allActCom'}>
        
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
    </footer>
  );
}
// write drag and drop if you figure out how to do it
// for drag & drop use react draggable https://www.npmjs.com/package/react-draggable
// footer in needless
