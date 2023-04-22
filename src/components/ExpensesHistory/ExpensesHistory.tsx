import './ExpensesHistory.styl';

import * as React from 'react';

import moment from 'moment';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { CATEGORY_NAMES } from '../../constants';
import { getExpensesHistory } from '../../store/selectors';

function ExpensesHistory() {

  const dispatch = useDispatch();
  const expensesHistory = useSelector(getExpensesHistory);

  return (
    <div className='expenses-history'>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount, rub</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expensesHistory.map(({ id, categoryId, date, amount }) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { CATEGORY_NAMES[categoryId] }
                            </TableCell>
                            <TableCell>{ moment(date).format('MMMM DD YYYY, HH:mm') }</TableCell>
                            <TableCell>{ amount }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default ExpensesHistory;
