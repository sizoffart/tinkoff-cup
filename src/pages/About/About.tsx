import './About.css';

import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getTodos } from '../../store/selectors';
import { fetchTodos } from '../../store/todosSlice';

function About() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(getTodos);

  const handleClick = () => {
    dispatch(fetchTodos() as any);
  };

  useEffect(() => {
    dispatch(fetchTodos() as any);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className='about-page'>This is about page</h1>
      <button onClick={handleClick}>Load Todos</button>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
