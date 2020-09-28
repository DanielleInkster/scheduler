import React from 'react';
import { ModalLink } from 'react-router-modal';
import { useParams } from 'react-router-dom';
import FormPopup from '../components/Popup';

export default function Table({ date, data }) {
  let params = useParams();

  function getTime(time) {
    return time.replace(/[: ]+/g, '');
  }

  function renderTableHeader(schedule = data) {
    if (date !== 'Please select a date for an appointment.') {
      let header = Object.keys(schedule[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  }

  function renderTableData(schedule = data) {
    if (date !== 'Please select a date for an appointment.') {
      return (data = schedule.map((slot, index) => {
        const { time, status } = slot;
        return (
          <tr key={index}>
            <td>{time}</td>
            <td>{status}</td>
            {status === 'available' && (
              <td>
                <ModalLink
                  path={`${params.date}/CreateAppointment/${getTime(time)}`}
                  component={FormPopup}
                >
                  Request this time
                </ModalLink>
              </td>
            )}
            {status === 'pending' && <td>Hello</td>}
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
