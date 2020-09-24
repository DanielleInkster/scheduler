import React from 'react';
import Popup from 'reactjs-popup';
import Form from './Form';
import 'reactjs-popup/dist/index.css';

export default function FormPopup({ date, time }) {
  return (
    <Popup trigger={<button> Book this slot </button>} position="right center">
      <div>
        <Form date={date} time={time} />
      </div>
    </Popup>
  );
}
