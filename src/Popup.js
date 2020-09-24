import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupExample() {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>hello</div>
    </Popup>
  );
}
