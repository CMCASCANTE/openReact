// importaciones
import React, { useState } from 'react';
import InputDeseo from './aniadirDeseos/InputDeseo';
import './App.css';
import ListaDeseos from './listarDeseos/ListaDeseos';

// array con deseos indiciales
const deseosIniciales = [
  { deseo: 'Aprender Javascript', done: true },
  { deseo: 'Aprender React', done: false },
  { deseo: 'Crear una web con React', done: false },
];

// componente principal
function App() {
  // creamos el array de deseos con estado y añadimos los inciales
  // de este modo lo podemos modificar y renderizar de nuevo
  // version de una sola lista
  // const [deseos, setDeseos] = useState(deseosIniciales);
  // ampliacion para tener dos listas
  const [deseosCompletos, setDeseosCompletos] = useState(
    deseosIniciales.filter(({ done }) => done),
  );
  const [deseosIncompletos, setDeseosIncompletos] = useState(
    deseosIniciales.filter(({ done }) => !done),
  );

  // añadimos los componentes al principal
  return (
    <div className="general">
      <h1>Mi lista de deseos</h1>

      {/* añadimos componente para añadir deseos
      desde el componente InputDeseo, cuando damos intro
      desde la funcion nuevoDeseoCreado nos devuelve el objeto
      con el valor del input y un done a false.
      cogemos este objeto y lo añadimos al array deseos
      el cual ya es mutable y renderiza al ser modificado */}
      <InputDeseo nuevoDeseoCreado={
        (deseo) => setDeseosIncompletos([deseo, ...deseosIncompletos])
      }
      />

      {/* añadimos lista de deseos y
      filtramos los que estan sin cumplir
      dándoles un titulo */}
      <ListaDeseos
        // version para solo una lista
        // deseos={deseos}
        // version para dos listas
        deseos={deseosIncompletos}
        titulo="Deseos sin cumplir"
        check={false}
        // versión para solo una lista
        // alCambiarDoneDeseos={setDeseos}
        // versión para dos listas
        alCambiarDoneDeseos={(deseo) => {
          setDeseosCompletos([deseo, ...deseosCompletos]);
          setDeseosIncompletos(deseosIncompletos.filter(({ done }) => !done));
        }}
      />

      {/* añadimos lista de deseos y
      filtramos, este caso, los cumplidos
      dándoles un titulo */}
      <ListaDeseos
        deseos={deseosCompletos}
        titulo="Deseos cumplidos"
        check
        alCambiarDoneDeseos={(deseo) => {
          setDeseosIncompletos([deseo, ...deseosIncompletos]);
          setDeseosCompletos(deseosCompletos.filter(({ done }) => done));
        }}
      />

      {/* boton para eliminar deseos ya cumplidos */}
      <button type="button" onClick={() => setDeseosCompletos(deseosCompletos.splice())}>
        Eliminar deseos cumplidos
      </button>
    </div>
  );
}

// exportamos el componente principal para consumirlo desde el index
export default App;
