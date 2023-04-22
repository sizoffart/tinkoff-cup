import './Main.css';

import { useDispatch } from 'react-redux';

import ExpensesHistory from '../../components/ExpensesHistory';

function Main() {

  const dispatch = useDispatch();

  return (
    <div className='main-content'>
      <ExpensesHistory />
    </div>
    )
}

export default Main;
  