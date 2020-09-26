export const getAppts = ({ date }) =>
  fetch(`http://localhost:4000/${date}`).then((res) => res.json());
