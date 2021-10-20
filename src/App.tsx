import React, { useState } from 'react';
import './App.css';
import { Frame } from './Components/moleculs/Frame/index'
import { Text } from "./Components/atoms/Text/index"
function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <Frame>

      </Frame>
    </div>
  );
}

export default App;
