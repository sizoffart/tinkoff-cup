import './Main.css';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
} from '../../store/counterSlice';
import { selectCounterValue } from '../../store/selectors';

function Main() {

  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  

  return (
    <div>
      <h1 className='main-page'>This is main page</h1>
      <div>Counter value: {counterValue}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
    )
}

export default Main;
  