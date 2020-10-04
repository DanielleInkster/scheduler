import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Typography,
  responsiveFontSizes,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import 'react-router-modal/css/react-router-modal.css';
import 'fontsource-roboto';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const text =
  'To cancel, click outside of the pop-up window or use the back button on your browser.';

const styles = {
  paper: {
    padding: '2vw',
    textAlign: 'center',
    color: '#FFFFFF',
    whiteSpace: 'wrap',
    background: '#6573c3',
    borderRadius: '1%',
  },
};
const useStyles = makeStyles(styles);

export default function Form({ appt, onSubmit, date, time }) {
  const params = useParams();
  const location = useLocation();
  const classes = useStyles();

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
      <Container className={classes.paper} width="110%">
        <form onSubmit={submitHandler}>
          <input type="hidden" name="date_id" id="date_id" ref={register} value={params.date} />
          <input type="hidden" name="time_id" id="time_id" ref={register} value={params.time} />
          <input type="hidden" name="date" id="date" ref={register} value={location.state.date} />
          <input type="hidden" name="time" id="time" ref={register} value={location.state.time} />
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
          <label htmlFor="project_name">Business name:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            ref={register({ required: true })}
            placeholder="Ex: 'Best Project'"
          />
          <br />
          <br />
          <label htmlFor="project_description">Business description:</label>
          <input
            type="text"
            id="project_description"
            name="project_description"
            maxLength="250"
            line-height="140px"
            ref={register({ required: true })}
            placeholder="Maximum of 250 characters"
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
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            startIcon={<ArrowUpwardIcon color="white" />}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Typography variant="subtitle1" gutterBottom>
          {text}
        </Typography>
      </Container>
    </div>
  );
}