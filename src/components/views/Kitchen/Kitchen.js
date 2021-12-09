import { Paper, TableCell, TableHead, TableRow, Table, TableBody, Checkbox } from '@mui/material';
import React from 'react';
import styles from './Kitchen.module.scss';

const kitchenContent = [
  { id: '1', status: 'ready', tableID: '1', order: 'Hawajska na cienkim z Ketchupem' },
  { id: '2', status: 'ready', tableID: '3', order: 'Burger Drwala' },
  { id: '3', status: 'not-ready', tableID: 'takeaway', order: 'Pad Thai' },
  { id: '4', status: 'ready', tableID: '4', order: 'Naleśniki na słono' },
  { id: '5', status: 'not-ready', tableID: 'delivery', order: 'Dewolaj, Piwo z Beczki' },
];

const renderActions = status => {
  switch (status) {
    case 'ready':
      return (
        <Checkbox checked={true}/>
      );
    case 'not-ready':
      return (
        <Checkbox checked={false}/>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table ID</TableCell>
          <TableCell>Order Deails</TableCell>
          <TableCell>Order Status</TableCell>
          <TableCell>Order ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {kitchenContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.tableID}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              {renderActions(row.status)} {row.status}
            </TableCell>
            <TableCell>
              {row.id}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;