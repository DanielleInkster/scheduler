export const getAppts = (date) => fetch(`http://localhost:4000/${date}`).then((res) => res.json());

export const getAppt = (date, time) =>
  fetch(`http://localhost:4000/${date}/${time}`).then((res) => res.json());

export const createAppt = (appt) =>
  fetch('http://localhost:4000/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appt),
  });

export const updateAppt = (appt, date, time) =>
  fetch(`http://localhost:4000/update/${date}/${time}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appt),
  });

export const deleteAppt = (date, time) =>
  fetch(`http://localhost:4000/${date}/${time}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
