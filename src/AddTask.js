import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva Tarea:
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddTask;