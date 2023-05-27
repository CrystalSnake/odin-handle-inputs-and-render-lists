import React from 'react';

const Overview = (props) => {
  const { tasks, handleDelete } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li data-id={task.id} key={task.id}>
            {task.text}
            <button onClick={handleDelete}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
