import React, { useState } from 'react';

const TodoItem = (props) => {
  const [taskName, setTaskName] = useState(props.task);
  const [id] = useState(props.id);

  const handleEdit = () => {
    console.log('handleEdit ' + props.id);
  };

  const handleDelete = () => {
    console.log('Deleted ' + props.id);
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="singleTask">
      <input
        type="text"
        id={id}
        value={taskName}
        onChange={handleChange}
      ></input>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
