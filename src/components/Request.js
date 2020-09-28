import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAppt } from '../api';

export default function Request() {
  const [request, setRequest] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchAppt = async () => {
      const appt = await getAppt(params.date, params.time);
      setRequest(appt[0]);
    };
    fetchAppt();
  });

  return (
    <div>
      <h2> Request for Appointment</h2>
      <h3>{request.date}</h3>
      <h3>{request.time}</h3>
      <h3>{request.name}</h3>
      <p>{request.project_name}</p>
      <p>{request.project_description}</p>
      <p>{request.email}</p>
    </div>
  );
}
