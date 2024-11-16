import React from 'react';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tareas</h2>
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas en la lista.</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;