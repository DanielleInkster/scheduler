import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export default function Form({ appt, onSubmit, date, time }) {
  const params = useParams();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      date: appt ? appt.date : '',
      date: appt ? appt.time : '',
      name: appt ? appt.name : '',
      project_name: appt ? appt.project_name : '',
      project_description: appt ? appt.project_description : '',
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
        <p>Date: {appt ? appt.date : date}</p>
        <p>Time: {appt ? appt.time : time}</p>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={register}
            placeholder="Ex: 'Peter Parker'"
          />
          <br />
          <br />
          <label htmlFor="project_name">Project name:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            ref={register}
            placeholder="Ex: 'Best Project'"
          />
          <br />
          <br />
          <label htmlFor="project_description">Project description:</label>
          <input
            type="text"
            id="project_description"
            name="project_description"
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
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}
