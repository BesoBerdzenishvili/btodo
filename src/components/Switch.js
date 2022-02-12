import React from 'react';
import '../style.css';
import './Switch.css';

export default function Switch({changeDarkM, darkMode}) {
  return (
    <div>
      <img
        src={
          darkMode
            ? 'https://pngset.com/images/moon-icon-white-half-moon-shape-text-outer-space-night-astronomy-transparent-png-448076.png'
            : 'https://raw.githubusercontent.com/fliderman01/pics/0bc83304c50dfc2bd0fcf68eda94b3bcf85144ba/20%20-%20todoAppImages/icon-sun.svg?token=ASG5THFOTFOE4XAXXZRKFG3CAY6SQ'
        }
        onClick={() => changeDarkM()}
        width="21px"
      />
    </div>
  );
}
