import React from 'react';
import './App.css';
import List from './components/List'
import Pad from './components/Pad'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Notes</h2>
        <List />
        <Pad />
      </header>
    </div>
  );
}

export default App;
