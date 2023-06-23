// importaciones
import React from 'react';
import PropTypes from 'prop-types';
import Deseo from './Deseo';

// creacion del componente con atributos
function ListaDeseos({ deseos, titulo, alCambiarDoneDeseos }) {
  return (
    <fieldset>
      <legend>{ titulo }</legend>
      <ul>
        {
          // recorremos el array de deseos creando una lista de elementos
          // para cada elemento cargamos el componente Deseo
          // y le damos los valores
          deseos
            .map(({ deseo, done }, i) => (
              <Deseo
                deseo={deseo}
                key={deseo}
                done={done}
                id={i}
                doneChange={(value) => {
                  const actualizarDeseos = [...deseos];
                  actualizarDeseos[i].done = value;
                  // versión inicial (una lista)
                  // alCambiarDoneDeseos(actualizarDeseos);
                  // modificación para versión ampliada
                  alCambiarDoneDeseos(actualizarDeseos[i]);
                }}
              />
            ))
          }
      </ul>
    </fieldset>
  );
}

// damos tipado a los atributos
ListaDeseos.propTypes = {
  deseos: PropTypes.arrayOf(
    PropTypes.shape({
      deseo: PropTypes.string,
      done: PropTypes.bool,
    }),
  ),
  titulo: PropTypes.string.isRequired,
  alCambiarDoneDeseos: PropTypes.func,
};

// creamos un valor por defecto para los valores del array ya que no los creamos como requeridos
ListaDeseos.defaultProps = {
  deseos: [],
  alCambiarDoneDeseos: () => {},
};

// exportamos el componente
export default ListaDeseos;
