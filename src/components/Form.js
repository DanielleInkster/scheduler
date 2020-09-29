import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useLocation } from 'react-router-dom';
import 'fontsource-roboto';

export default function Form({ appt, onSubmit, date, time }) {
  const params = useParams();
  const location = useLocation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
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
        <form onSubmit={submitHandler}>
          {console.log(location)}
          <input type="hidden" name="date_id" id="date_id" ref={register} value={params.date} />
          <input type="hidden" name="time_id" id="time_id" ref={register} value={params.time} />
          <input type="hidden" name="date" id="date" ref={register} value={date} />
          <input type="hidden" name="time" id="time" ref={register} value={time} />
          <h3>Request for Appointment</h3>
          <p>Date: {appt ? appt.date : location.state.date}</p>
          <p>Time: {appt ? appt.time : location.state.time}</p>
          <label htmlFor="name">Full name:</label>
          <input
            type="name"
            id="name"
            name="name"
            ref={register({ required: true })}
            placeholder="Ex: 'Peter Parker'"
          />
          <br />
          <br />
          <label htmlFor="project_name">Project name:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            ref={register({ required: true })}
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
            ref={register({ required: true })}
            placeholder="Maximum of 1000 characters"
          />
          <br />
          <br />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={register({ required: true })}
            placeholder="Ex: 'peter.parker@marvel.com'"
          />
          <br />
          <br />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        <h5>To cancel, click outside of the pop-up window.</h5>
      </center>
    </div>
  );
}
