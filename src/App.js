import './App.css';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import Jugadores from './components/Jugadores';
import Suplentes from './components/Suplentes';
import Titulares from './components/Titulares';

function App() {
  return (
    <main>
      <h1>EDmananger</h1>
      <Jugadores/>
      <EquipoSeleccionado/>
      <Suplentes/>
      <Titulares/>
    </main>
  );
}

export default App;
