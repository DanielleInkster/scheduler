import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Assets/Header';
import DailySchedule from './DailySchedule';
import Intro from '../components/Intro';
import DayPicker from 'react-day-picker';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import 'react-day-picker/lib/style.css';

const styles = {
  paper: {
    padding: '1vw',
    paddingBottom: '2vw',
    textAlign: 'center',
    color: '#FFFFFF',
    whiteSpace: 'wrap',
    background: '#6573c3',
    margin: '1vh',
    borderRadius: '5%',
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
};
const useStyles = makeStyles(styles);

export default function Calendar() {
  const [date, selectDate] = useState(null);
  const history = useHistory();
  const classes = useStyles();

  function dbDate(data) {
    if (data !== null) {
      const year = data.getFullYear();
      const month = data.getMonth() + 1;
      const day = data.getDate();
      const newDate = '';
      return newDate.concat(year, month, day);
    }
  }

  function handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    selectDate(modifiers.selected ? undefined : day);
    const dbDay = dbDate(day);
    history.push(`/${dbDay}`);
  }

  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={1} direction="row" justify="space-evenly">
        <Grid item lg={5} md={4} sm={12}>
          <Paper className={classes.paper}>
            <Intro />
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={classes.whitepaper} lg={3} md={4} sm={6} xs={12}>
            <DayPicker
              selectedDays={date}
              onDayClick={handleDayClick}
              disabledDays={[{ daysOfWeek: [0, 6] }, { before: new Date() }]}
            />
          </Paper>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Paper className={classes.paper} lg={4} md={4} sm={6} xs={12}>
            <DailySchedule date={date} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
