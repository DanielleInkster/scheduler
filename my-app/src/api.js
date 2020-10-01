export const getAppts = (date) => fetch(`/${date}`).then((res) => res.json());

export const getAppt = (date, time) =>
  fetch(`/${date}/${time}`).then((res) => res.json());

export const createAppt = (appt) =>
  fetch('/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appt),
  });

export const updateAppt = (appt, date, time) =>
  fetch(`/${date}/${time}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appt),
  });

export const deleteAppt = (date, time) =>
  fetch(`/delete/${date}/${time}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
