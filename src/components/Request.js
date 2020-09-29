import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getAppt, deleteAppt } from '../api';
import { ModalLink } from 'react-router-modal';

export default function Request() {
  const [appt, setRequest] = useState('');
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchAppt = async () => {
      const req = await getAppt(params.date, params.time);
      setRequest(req[0]);
    };
    fetchAppt();
  });

  async function removeAppt() {
    await deleteAppt(params.date, params.time);
    await window.alert('Appointment cancelled. No other action is required');
    history.push('/');
  }

  function editAppt() {
    history.push(`/${params.date}/EditAppointment/${params.time}`, { appt: appt });
  }

  function loadingError() {
    return (
      <div>
        <p>Uh-oh! Something went wrong loading this page. Please try again.</p>
        <button onClick={history.push('/')}>Go Home </button>
      </div>
    );
  }

  return appt ? (
    <div>
      <h2> Request for Appointment</h2>
      <h3>{appt.date}</h3>
      <h3>{appt.time}</h3>
      <h3>{appt.name}</h3>
      <p>{appt.project_name}</p>
      <p>{appt.project_description}</p>
      <p>{appt.email}</p>
      <button onClick={editAppt}>Edit Request</button>
      <button onClick={removeAppt}>Delete Request</button>
    </div>
  ) : (
    <div>Loading... {setTimeout(() => loadingError, 3000)}</div>
  );
}
