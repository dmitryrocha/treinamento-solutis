import './App.css';
import Contador from './Contador'
import Relogio from './Relogio'
import Labels from './Labels'

function App() {
  return (
    <div align="center">
      <Labels nome = "Relógio" />
      <Relogio />
      <Labels nome = "Cronômetro" />
      <Contador />

    </div>
  );
}

export default App;
