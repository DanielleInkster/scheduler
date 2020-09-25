import React from 'react';
import Table from '../containers/Table';

export default function DailySchedule({ date }) {
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

  function displayDate(day = date) {
    if (day === null) {
      return 'Please select a date for an appointment.';
    } else {
      return day.toDateString();
    }
  }

  return (
    <div>
      <p id="date">{`${displayDate()}`}</p>
      <center>
        <Table date={displayDate()} data={schedule} />
      </center>
    </div>
  );
}
