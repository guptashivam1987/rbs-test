import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Table, TableRow, TableCell } from '@material-ui/core';

export default function Emp(props) {
  const { onClose, open, emp } = props;
  const handleClose = () => onClose();

  return (
    <Dialog onClose={handleClose} aria-labelledby="emp-name" open={open}>
      <DialogTitle id="emp-name">{emp.firstName + " " + emp.lastName}</DialogTitle>
      <Table size='small'>
        <TableRow>
          <TableCell>Employee Id</TableCell>
          <TableCell>{emp.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gender</TableCell>
          <TableCell>{emp.gender}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>{emp.email}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Phone</TableCell>
          <TableCell>{emp.phone}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Date of Joining</TableCell>
          <TableCell>{emp.dateOfJoining}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Salary</TableCell>
          <TableCell>{emp.salary}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Department</TableCell>
          <TableCell>{emp.department}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Address</TableCell>
          <TableCell>{emp.street + ", " + emp.city + ", " + emp.country}</TableCell>
        </TableRow>
      </Table>
    </Dialog>
  );
}
