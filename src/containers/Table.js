import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Table, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import { fontFamily, color } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  table: {
    flexGrow: 1,
  },
  tablerow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#3f51b5',
    },
    textAlign: 'center',
    flexGrow: 1,
  },
  tableitem: {
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default function TableSchedule({ date, data }) {
  let params = useParams();
  const classes = useStyles();

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
          <TableRow className={classes.tablerow} key={index}>
            <td className={classes.tableitem}>{time}</td>
            <td className={classes.tableitem}>{status}</td>
            {status === 'available' && (
              <td className={classes.tableitem}>
                <Link
                  to={{
                    pathname: `${params.date}/CreateAppointment/${getTime(time)}`,
                    state: {
                      date: date,
                      time: time,
                    },
                  }}
                  style={{ textDecoration: 'none', color: 'white', fontFamily: 'sans-serif' }}
                >
                  Create Request
                </Link>
              </td>
            )}
            {status === 'pending' && (
              <td>
                <Link
                  to={{
                    pathname: `${params.date}/ViewAppointment/${getTime(time)}`,
                    state: {
                      date: date,
                      time: time,
                    },
                  }}
                  style={{ textDecoration: 'none', color: 'white', fontFamily: 'sans-serif' }}
                >
                  View Request
                </Link>
              </td>
            )}
            {status === 'unavailable' && <td></td>}
          </TableRow>
        );
      }));
    }
  }

  return (
    <div className={classes.table}>
      <Container>
        <Typography variant="h7">
          <Table>
            <tr>{renderTableHeader()}</tr>
            <tbody>{renderTableData()}</tbody>
          </Table>
        </Typography>
      </Container>
    </div>
  );
}
