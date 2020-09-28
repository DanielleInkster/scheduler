import React from 'react';
import Form from './Form';
import { createAppt } from '../api';
import { useHistory, useParams } from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';

export default function CreateAppt({ date, time }) {
  const history = useHistory();
  const params = useParams();

  const onSubmit = async (data) => {
    console.log(data);
    await createAppt(data);
    history.push(`/${params.date}/ViewAppointment/${params.time}`);
  };
  return (
    <div>
      <Form date={date} time={time} onSubmit={onSubmit} />
    </div>
  );
}
