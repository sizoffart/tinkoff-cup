import './Summary.css';

import { PieChart } from 'react-minimal-pie-chart';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  CATEGORY_COLORS,
  CATEGORY_NAMES,
} from '../../constants';
import { getExpensesHistoryFiltered } from '../../store/selectors';

function Summary() {

  const dispatch = useDispatch();

  const expensesHistory = useSelector(getExpensesHistoryFiltered);

  return (
    <div className="summary-content">
        <h1>Summary</h1>
        <div className="summary-content__pie-chart">
            <PieChart
                data={expensesHistory.map(
                    ({ categoryId, amount }) => ({ title: CATEGORY_NAMES[categoryId], value: amount, color: CATEGORY_COLORS[categoryId] })
                ) as any}
                animate
            />
        </div>
    </div>
    )
}

export default Summary;
