// importaciones
import React from 'react';
import InputDeseo from './aniadirDeseos/InputDeseo';
import './App.css';
import ListaDeseos from './listarDeseos/ListaDeseos';

// array con deseos indiciales
const deseos = [
  { deseo: 'Aprender Javascript', done: true },
  { deseo: 'Aprender React', done: false },
  { deseo: 'Crear una web con React', done: false },
];

// componente principal
function App() {
  return (
    <div className="general">
      <h1>Mi lista de deseos</h1>
      {/* añadimos componente para añadir deseos */}
      <InputDeseo />
      {/* añadimos lista de deseos y
      filtramos los que estan sin cumplir
      dándoles un titulo */}
      <ListaDeseos deseos={deseos.filter(({ done }) => !done)} titulo="Deseos sin cumplir" check={false} />
      {/* añadimos lista de deseos y
      filtramos, este caso, los cumplidos
      dándoles un titulo */}
      <ListaDeseos deseos={deseos.filter(({ done }) => done)} titulo="Deseos cumplidos" check />
    </div>
  );
}

// exportamos el componente principal para consumirlo desde el index
export default App;
