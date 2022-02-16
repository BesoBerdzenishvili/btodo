import React from 'react';
import '../style.css';
import './Switch.css';

export default function Switch({ changeDarkM, darkMode }) {
  return (
    <div>
      <img
        src={
          darkMode
            ? 'https://images2.imgbox.com/4b/52/oGZSKuk2_o.png'
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sun_white_icon.svg/1200px-Sun_white_icon.svg.png'
        }
        onClick={() => changeDarkM()}
        width="21px"
      />
    </div>
  );
}
