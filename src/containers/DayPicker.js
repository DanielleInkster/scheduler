import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Assets/Header';
import DailySchedule from './DailySchedule';
import Intro from '../components/Intro';
import DayPicker from 'react-day-picker';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import 'react-day-picker/lib/style.css';

const styles = {
  paper: {
    padding: '2vw',
    textAlign: 'center',
    color: '#FFFFFF',
    whiteSpace: 'wrap',
    background: '#6573c3',
    margin: '1vh',
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
      <Grid container spacing={2} direction="row" justify="flex-end">
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <Intro />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <DayPicker
            selectedDays={date}
            onDayClick={handleDayClick}
            disabledDays={[{ daysOfWeek: [0, 6] }, { before: new Date() }]}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <DailySchedule date={date} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
