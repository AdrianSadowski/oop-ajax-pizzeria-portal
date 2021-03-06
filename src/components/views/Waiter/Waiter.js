import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@mui/material//Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.any,
    fetchChangeStatus: PropTypes.func,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row) {
    const status = row.status;
    switch (status) {
      case 'free':
        return (
          <Button onClick={() => {this.props.fetchChangeStatus(row.id, 'thinking' );}}>thinking</Button>
        );
      case 'thinking':
        return (
          <Button onClick={() => {this.props.fetchChangeStatus(row.id, 'new order');}} >new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => {this.props.fetchChangeStatus(row.id, 'prepared');}} >prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => {this.props.fetchChangeStatus(row.id, 'delivered');}} >delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => {this.props.fetchChangeStatus(row.id, 'paid');}} >paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => {this.props.fetchChangeStatus(row.id, 'thinking');}} >free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={'/waiter/order/' + row.order} component={NavLink}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;