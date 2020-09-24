import React, { useState } from 'react';
import DailySchedule from './DailySchedule';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Calendar() {
  const [date, selectDate] = useState(null);

  function handleDayClick(day) {
    selectDate(day);
  }
  return (
    <div>
      <DayPicker selectedDays={date} onDayClick={handleDayClick} />
      <p>
        {date
          ? `${date.toISOString().substring(0, 10)}`
          : 'Please select a day for an appointment.'}
      </p>
      <DailySchedule date={date} />
    </div>
  );
}
