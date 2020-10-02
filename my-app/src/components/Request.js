import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getAppt, deleteAppt } from '../api';
import Header from '../Assets/Header';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  button: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  whitepaper: {
    padding: '1vw',
    paddingBottom: '2vw',
    textAlign: 'center',
    background: '#FFFFFF',
    whiteSpace: 'wrap',
    margin: '1vh',
    borderRadius: '5%',
  },
}));

export default function Request() {
  const [appt, setRequest] = useState('');
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();

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

  return appt ? (
    <div>
      <Header />
      <Grid container direction="row" justify="center">
        <Grid item lg={5} md={6} sm={12}>
          <Typography variant="h5" component="h2">
            <div className={classes.whitepaper} lg={5} md={6} sm={8} xs={12}>
              <h2>
                <u>Request for Appointment</u>
              </h2>
              <h4>Date: {appt.date}</h4>
              <h4>Time: {appt.time}</h4>
              <h4>Name: {appt.name}</h4>
              <p>Business Name: {appt.project_name}</p>
              <p>Business Description: {appt.project_description}</p>
              <p>Contact Email: {appt.email}</p>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                margin="2%"
                padding="2%"
                startIcon={<EditIcon />}
                onClick={editAppt}
              >
                Edit Request
              </Button>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={removeAppt}
              >
                Delete Request
              </Button>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>
      <Paper className={classes.whitepaper}>
        <p>Uh-oh! Something went wrong loading this page. Please try again.</p>
        <button onClick={() => history.push('/')}>Go Home </button>
      </Paper>
    </div>
  );
}

