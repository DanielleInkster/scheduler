import React from 'react';

export default function DailySchedule({ date }) {

  function displayDate() {
    if (date === null) {
      return 'Please select a date for an appointment.';
    } else {
     return date.toDateString();
    }
  }

  return <div>{`${displayDate()}`}</div>;
}
