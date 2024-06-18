import React, { useState } from 'react';
import './App.css';

function App() {
    
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState('');

  return (
    <div className="App">
      <h2>Teacher Name: {name}</h2>
      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>
    </div>
  );
}

export default App;
