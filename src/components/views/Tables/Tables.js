import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Tables.module.scss';

const tableContent = [
  {
    hour: '12:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '12'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '12:30',
    tables: [
      {table: 1, status: 'booked', bookingId: '12'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '13:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '12'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'event', bookingId: '1'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '13:30',
    tables: [
      {table: 1, status: 'booked', bookingId: '12'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'booked', bookingId: '521'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '14:00',
    tables: [
      {table: 1, status: 'booked', bookingId: '12'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'booked', bookingId: '521'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
  {
    hour: '14:30',
    tables: [
      {table: 1, status: 'booked', bookingId: '12'},
      {table: 2, status: 'free', bookingId: null},
      {table: 3, status: 'booked', bookingId: '521'},
      {table: 4, status: 'free', bookingId: null},
    ],
  },
];

const renderActions = (status, table) => {
  switch (status) {
    case 'free':
      return (
        <Button className={styles.free} to={`/tables/booking-new`} component={NavLink}>Free</Button>
      );
    case 'booked':
      return (
        <Button to={`/tables/booking/${table.bookingId}`} component={NavLink}>{table.bookingId}</Button>  
      );
    case 'event':
      return (
        <Button to={`/tables/events/${table.bookingId}`} component={NavLink}>Event {table.bookingId}</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableContent.map((row) => {
          return (
            <TableRow key={row.hour}>
              <TableCell className={styles.hour}>{row.hour}</TableCell> 
              {row.tables.map((table) => {
                return(
                  <TableCell className={styles.book} key={table.id}>
                    {renderActions(table.status, table)}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;