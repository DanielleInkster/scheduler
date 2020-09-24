import React from 'react';
import PopupExample from './Popup';

export default function DailySchedule({ date }) {
  const schedule = [
    { time: '9:00', status: 'blocked' },
    { time: '10:00', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '12:00', status: 'blocked' },
    { time: '13:00', status: 'available' },
    { time: '14:00', status: 'available' },
    { time: '15:00', status: 'available' },
    { time: '16:00', status: 'available' },
    { time: '17:00', status: 'blocked' },
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
                <PopupExample date={displayDate()} time={time} />
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
