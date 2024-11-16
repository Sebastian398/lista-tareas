import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css'; // Asegúrate de importar el archivo CSS

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <div className="app">
        <h1>Lista de Tareas</h1>
        <nav>
          <Link to="/" className="nav-button">Ver Tareas</Link>
          <Link to="/add" className="nav-button">Agregar Tarea</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} />} />
          <Route path="/add" element={<AddTask addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;