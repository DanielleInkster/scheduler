import React from 'react';
import Form from './Form';
import { createAppt } from '../api';
import { useHistory } from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';

export default function Modal1({ date, time }) {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createAppt(data);
    history.push('/');
  };
  return (
    <div>
      <Form date={date} time={time} onSubmit={onSubmit} />
    </div>
  );
}
