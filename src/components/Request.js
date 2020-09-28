import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getAppt, deleteAppt } from '../api';

export default function Request() {
  const [request, setRequest] = useState('');
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchAppt = async () => {
      const appt = await getAppt(params.date, params.time);
      setRequest(appt[0]);
    };
    fetchAppt();
  });

  function removeAppt() {
    deleteAppt(params.date, params.time);
    history.push('/');
  }

  return (
    <div>
      <h2> Request for Appointment</h2>
      <h3>{request.date}</h3>
      <h3>{request.time}</h3>
      <h3>{request.name}</h3>
      <p>{request.project_name}</p>
      <p>{request.project_description}</p>
      <p>{request.email}</p>
      <button onClick={removeAppt}>Delete Request</button>
    </div>
  );
}
