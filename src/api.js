export const getAppts = (date) => fetch(`http://localhost:4000/${date}`).then((res) => res.json());

export const getAppt = (date, time) =>
  fetch(`http://localhost:4000/${date}/${time}`).then((res) => res.json());

export const deleteAppt = (date, time) =>
  fetch(`http://localhost:4000/${date}/${time}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
