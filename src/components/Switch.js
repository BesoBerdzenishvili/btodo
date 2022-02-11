import React from 'react';
import '../style.css';
import './Switch.css';

export default function Switch({changeDarkM, darkMode}) {
  return (
    <div>
      <img
        src={
          darkMode
            ? 'https://raw.githubusercontent.com/fliderman01/pics/0bc83304c50dfc2bd0fcf68eda94b3bcf85144ba/20%20-%20todoAppImages/icon-moon.svg?token=ASG5THEOSN5OQBYRIJYVBEDCAY3WG'
            : 'https://raw.githubusercontent.com/fliderman01/pics/0bc83304c50dfc2bd0fcf68eda94b3bcf85144ba/20%20-%20todoAppImages/icon-sun.svg?token=ASG5THFOTFOE4XAXXZRKFG3CAY6SQ'
        }
        onClick={() => changeDarkM()}
        width="21px"
      />
    </div>
  );
}
