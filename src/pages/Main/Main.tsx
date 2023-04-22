import './Main.css';

import { useDispatch } from 'react-redux';

import ExpensesHistory from '../../components/ExpensesHistory';
import NewExpensesRecord from '../../components/NewExpensesRecord';

function Main() {

  const dispatch = useDispatch();

  return (
    <div className='main-content'>
      <div className="main-content__body">
        <ExpensesHistory />
        <NewExpensesRecord />
      </div>
      <div className="main-content__aside"></div>
    </div>
    )
}

export default Main;
  