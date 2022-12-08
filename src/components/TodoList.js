import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {

  return (
    <div className="todoList">
      <ul id="todoItemList">
        <TodoItem task={'task 1'} id="1" />
        <TodoItem task={'task 2'} id="2" />
        <TodoItem task={'task 3'} id="3" />
        <TodoItem task={'task 4'} id="4" />
      </ul>
    </div>
  );
};

export default TodoList;
