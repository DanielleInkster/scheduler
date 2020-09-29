import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

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
                <Link
                  to={{
                    pathname: `${params.date}/CreateAppointment/${getTime(time)}`,
                    state: {
                      date: date,
                      time: time,
                    },
                  }}
                >
                  Create Request
                </Link>
              </td>
            )}
            {status === 'pending' && (
              <td>
                <Link to={`${params.date}/ViewAppointment/${getTime(time)}`}>View Request</Link>
              </td>
            )}
          </tr>
        );
      }));
    }
  }

  return (
    <div className="Table">
      <Container>
        <Typography variant="h7">
          <table>
            <tr>{renderTableHeader()}</tr>
            <tbody>{renderTableData()}</tbody>
          </table>
        </Typography>
      </Container>
    </div>
  );
}
