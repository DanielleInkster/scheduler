import React from 'react';
import FormPopup from '../components/Popup';

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

  function renderTableHeader(data = schedule) {
    if (date != null) {
      let header = Object.keys(data[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  }

  function renderTableData(data = schedule) {
    if (date != null) {
      return (data = schedule.map((slot, index) => {
        const { time, status } = slot;
        return (
          <tr key={index}>
            <td>{time}</td>
            <td>{status}</td>
            {status === 'available' && (
              <td>
                <FormPopup date={displayDate()} time={time} />
              </td>
            )}
          </tr>
        );
      }));
    }
  }

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
        <table>
          <tr>{renderTableHeader()}</tr>
          <tbody>{renderTableData()}</tbody>
        </table>
      </center>
    </div>
  );
}
