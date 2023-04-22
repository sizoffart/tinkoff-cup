import './ExpensesHistory.css';

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

import {
  CATEGORY_COLORS,
  CATEGORY_NAMES,
} from '../../constants';
import { getExpensesHistoryFiltered } from '../../store/selectors';

function ExpensesHistory() {

  const dispatch = useDispatch();
  const expensesHistory = useSelector(getExpensesHistoryFiltered);

  return (
    <div className='expenses-history'>
        <h1>My expenses</h1>
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
                                <span
                                    className="category-cell__wrap"
                                    style={{ backgroundColor: CATEGORY_COLORS[categoryId], padding: "5px", borderRadius: "5px" }}
                                >
                                    { CATEGORY_NAMES[categoryId] }
                                </span>
                            </TableCell>
                            <TableCell>{ moment(date).format('DD MMMM YYYY') }</TableCell>
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
