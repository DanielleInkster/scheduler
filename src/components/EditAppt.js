import React, { useEffect, useState } from 'react';
import Form from './Form';
import { useParams, useHistory } from 'react-router-dom';
import { getAppt, updateAppt } from '../api';
import 'fontsource-roboto';
import 'react-router-modal/css/react-router-modal.css';

export default function EditAppt() {
  let params = useParams();
  const [appt, setRequest] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchAppt = async () => {
      const req = await getAppt(params.date, params.time);
      setRequest(req[0]);
    };
    fetchAppt();
  });

  const onSubmit = async (data) => {
    await updateAppt(data, params.date, params.time);
    window.alert('Request updated successfully!');
    history.push(`/${params.date}/ViewAppointment/${params.time}`);
  };

  return <div>{appt !== '' && <Form appt={appt} onSubmit={onSubmit} />}</div>;
}
