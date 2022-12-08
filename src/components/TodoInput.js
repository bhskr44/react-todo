import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';

const TodoInput = () => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    console.log('handleChange ' + e.target.value);
    setTask(e.target.value);
    console.log('task ' + task);
    const root = ReactDOM.createRoot(document.getElementById('todoItemList'));

    root.render(
      <TodoList task={'task 5'} id="5" />
    );
  };

  return (
    <div className="inputTask">
      <input onKeyUp={handleChange} name="taskName"></input>
    </div>
  );
};

export default TodoInput;
