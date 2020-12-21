import React from 'react';
import './App.css';
import Contador from './Contador'
import Relogio from './Relogio'
import LabelCronometro from './LabelCronometro'

function App() {
  return (
    <div align="center">
      <LabelCronometro name = "Relógio" />
      <Relogio />
      <LabelCronometro name ="Cronômetro" />
      <Contador />
    </div>
  );
}

export default App;
