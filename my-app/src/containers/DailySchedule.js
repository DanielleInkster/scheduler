import React, { useEffect, useState } from 'react';
import Table from './Table';
import { getAppts } from '../api';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default function DailySchedule({ date }) {
  /* eslint-disable */
  const [items, setItems] = useState([]);
  const params = useParams()
  /* eslint-enable */
  const schedule = [
    { time: '9:00 AM', status: 'unavailable' },
    { time: '10:00 AM', status: 'available' },
    { time: '11:00 AM', status: 'available' },
    { time: '12:00 PM', status: 'unavailable' },
    { time: '1:00 PM', status: 'available' },
    { time: '2:00 PM', status: 'available' },
    { time: '3:00 PM', status: 'available' },
    { time: '4:00 PM', status: 'available' },
    { time: '5:00 PM', status: 'unavailable' },
  ];

  useEffect(() => {
    if (params.date !== null) {
      const fetchAppts = async () => {
        const appts = await getAppts(params.date);
        setItems(appts);
      };
      fetchAppts();
    }
  }, [params.date]);

  function createNewSchedule() {
    const newSchedule = [...schedule];
    newSchedule.map((slot) =>
      items.map((item) => {
        if (slot.time === item.time) {
          slot.status = 'pending';
        }
        return newSchedule;
      }),
    );
  }

  return (
    <div>
      <Typography variant="h6">
        {date === null && (
          <p id="date">
            <b> Please select a date. </b>
          </p>
        )}
        {date === undefined && (
          <p id="date">
            <b> Please select a date. </b>
          </p>
        )}
        {date !== null && date !== undefined && (
          <p id="date">
            <b>{date.toDateString()}</b>
          </p>
        )}
      </Typography>
      {items.length > 0 && date !== undefined && createNewSchedule()}
      <center>
        {date !== null && date !== undefined && (
          <Table date={date.toDateString()} data={schedule} />
        )}
      </center>
    </div>
  );
}
