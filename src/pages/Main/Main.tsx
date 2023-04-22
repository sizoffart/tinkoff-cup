import './Main.css';

import { useDispatch } from 'react-redux';

import ExpensesHistory from '../../components/ExpensesHistory';
import FiltersPanel from '../../components/FiltersPanel';
import NewExpensesRecord from '../../components/NewExpensesRecord';
import Summary from '../../components/Summary';

function Main() {

  const dispatch = useDispatch();

  return (
    <div className='main-content'>
      <div className="main-content__body">
        <ExpensesHistory />
        <NewExpensesRecord />
      </div>
      <div className="main-content__aside">
        <FiltersPanel />
        <Summary />
      </div>
    </div>
    )
}

export default Main;
  