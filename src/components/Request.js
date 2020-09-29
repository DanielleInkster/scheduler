import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getAppt, deleteAppt } from '../api';
import { Button, Container, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'fontsource-roboto';

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
    await window.alert('Request cancelled. No other action is required');
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
    <Container>
      <Typography variant="h5" component="h2">
        <div>
          <h2>
            <u>Request for Appointment</u>
          </h2>
          <h4>Date: {appt.date}</h4>
          <h4>Time: {appt.time}</h4>
          <h4>Name: {appt.name}</h4>
          <p>Project Name: {appt.project_name}</p>
          <p>Project Description: {appt.project_description}</p>
          <p>Contact Email: {appt.email}</p>
          <Button color="primary" variant="contained" startIcon={<EditIcon />} onClick={editAppt}>
            Edit Request
          </Button>
          <Button
            color="primary"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={removeAppt}
          >
            Delete Request
          </Button>
        </div>
      </Typography>
    </Container>
  ) : (
    <div>Loading... {setTimeout(() => loadingError, 3000)}</div>
  );
}
