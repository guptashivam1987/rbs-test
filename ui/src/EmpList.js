import React from 'react';
import './EmpList.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import EmpDialog from './Emp';

const headCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'Employee Id' },
  { id: 'firstName', numeric: false, disablePadding: false, label: 'First Name' },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'Last Name' },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
  { id: 'salary', numeric: false, disablePadding: false, label: 'Salary' }
];

export default function EmpTable({rows, order, orderBy, handleSort}) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const handleClick = (index) => {
    setSelected(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="tableWrapper">
      <Table size='small'>
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleSort}
        />
        <TableBody>
          { rows.map((row, index) => <Row row={row} index={index} handleClick={handleClick}/> )}
        </TableBody>
      </Table>
      {rows.length > selected && <EmpDialog open={open} onClose={handleClose} emp={rows[selected]}/>}
    </div>
  );
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function Row({row, index, handleClick}) {
  const labelId = `enhanced-table-checkbox-${index}`;
  return (
    <TableRow
      hover
      onClick={() => handleClick(index)}
      tabIndex={-1}
      key={row.name}
    >
      <TableCell component="th" id={labelId} scope="row">{row.id}</TableCell>
      <TableCell align="left">{row.firstName}</TableCell>
      <TableCell align="left">{row.lastName}</TableCell>
      <TableCell align="left">{row.gender}</TableCell>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="left">{row.phone}</TableCell>
      <TableCell align="right">{row.salary}</TableCell>
    </TableRow>
  );
}