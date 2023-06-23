import React from 'react';
import './App.css';

const deseos = [
  { deseo: 'Aprender Javascript', done: true },
  { deseo: 'Aprender React', done: false },
  { deseo: 'Crear una web con React', done: false },
];

function App() {
  return (
    <div className="general">
      <h1>Mi lista de deseos</h1>
      <fieldset>
        <legend>Nuevo deseo</legend>
        <input type="text" placeholder="Introduce tu deseo" />
      </fieldset>
      <fieldset>
        <legend>Deseos sin cumplir</legend>
        <ul>
          {
            deseos
              .filter(({ done }) => !done)
              .map(({ deseo, done }, i) => (
                <li>
                  <input type="checkbox" name={deseo} id={i} checked={done} />
                  <label htmlFor={i}>{deseo}</label>
                </li>
              ))
            }
        </ul>
      </fieldset>
      <fieldset>
        <legend>Deseos cumplidos</legend>
        <ul>
          {
            deseos
              .filter(({ done }) => done)
              .map(({ deseo, done }, i) => (
                <li className={done ? 'linea_tachada' : ''}>
                  <input type="checkbox" name={deseo} id={i} checked={done} />
                  <label htmlFor={i}>{deseo}</label>
                </li>
              ))
            }
        </ul>
      </fieldset>
    </div>
  );
}

export default App;
