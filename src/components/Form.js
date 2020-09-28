import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export default function Form({ appt, onSubmit, date, time }) {
  const params = useParams();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fname: appt ? appt.name : '',
      projname: appt ? appt.project_name : '',
      projdesc: appt ? appt.project_description : '',
      email: appt ? appt.email : '',
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <div>
      <center>
        <h3>Request for Appointment</h3>
        <p id="date">Date: {date}</p>
        <p id="time">Time: {time}</p>
        <form onSubmit={submitHandler}>
          <input type="hidden" id="date_id" value={params.date} />
          <input type="hidden" id="time" value={params.time} />
          <label htmlFor="fname">Full name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            ref={register}
            placeholder="Ex: 'Peter Parker'"
          />
          <br />
          <br />
          <label htmlFor="projname">Project name:</label>
          <input
            type="text"
            id="projname"
            name="projname"
            ref={register}
            placeholder="Ex: 'Best Project'"
          />
          <br />
          <br />
          <label htmlFor="projdesc">Project description:</label>
          <input
            type="text"
            id="projdesc"
            name="projdesc"
            maxLength="1000"
            ref={register}
            placeholder="Maximum of 1000 characters"
          />
          <br />
          <br />
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            id="email"
            name="email"
            ref={register}
            placeholder="Ex: 'peter.parker@marvel.com'"
          />
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </center>
    </div>
  );
}
