import React, { useState } from 'react';
import './App.css';
import { NameInput } from './Components//atoms/Button/index';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <NameInput value={inputValue} onChange={setInputValue}></NameInput>
    </div>
  );
}

export default App;
