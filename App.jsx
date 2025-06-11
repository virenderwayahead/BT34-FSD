import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim() === '') return;
    if (editIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editIndex] = input;
      setTasks(newTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput('');
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="main">
      <h2>TODO LIST</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="add item . . ."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'ADD'}</button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <span>{task}</span>
            <div>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
