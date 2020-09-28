import React from 'react';
import Form from './Form';
import 'react-router-modal/css/react-router-modal.css';

export default function FormPopup({ date, time }) {
  return (
    <div>
      <Form date={date} time={time} />
    </div>
  );
}
