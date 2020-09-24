import React from 'react';
import FormPopup from '../components/Popup';

export default function Table({ date, data }) {
  function renderTableHeader(schedule = data) {
    if (date != 'Please select a date for an appointment.') {
      let header = Object.keys(schedule[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  }

  function renderTableData(schedule = data) {
    if (date != 'Please select a date for an appointment.') {
      return (data = schedule.map((slot, index) => {
        const { time, status } = slot;
        return (
          <tr key={index}>
            <td>{time}</td>
            <td>{status}</td>
            {status === 'available' && (
              <td>
                <FormPopup date={date} time={time} />
              </td>
            )}
          </tr>
        );
      }));
    }
  }

  return (
    <div className="Table">
      <table>
        <tr>{renderTableHeader()}</tr>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}
