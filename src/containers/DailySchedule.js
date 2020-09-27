import React, { useEffect, useState } from 'react';
import Table from '../containers/Table';
import { getAppts } from '../api';
import { useParams } from 'react-router-dom';

export default function DailySchedule({ date }) {
  /* eslint-disable */
  const [items, setItems] = useState([]);
  const day = useParams()
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
    if (day !== null) {
      const fetchAppts = async () => {
        const appts = await getAppts(day);
        setItems(appts);
      };
      fetchAppts();
    }
  }, [day]);

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
      {date === null && <p id="date"> Please select a date. </p>}
      {date !== null && <p id="date">{date.toDateString()}</p>}
      {items.length > 0 && createNewSchedule()}
      <center>{date !== null && <Table date={date.toDateString()} data={schedule} />}</center>
    </div>
  );
}
