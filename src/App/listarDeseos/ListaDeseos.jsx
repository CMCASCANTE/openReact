// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// creacion del componente con atributos
function ListaDeseos({ deseos, titulo }) {
  return (
    <fieldset>
      <legend>{ titulo }</legend>
      <ul>
        {
          // recorremos el array de deseos creando una lista de elementos
          deseos
            .map(({ deseo, done }, i) => (
              <li>
                <input type="checkbox" name={deseo} id={i} checked={done} />
                <label htmlFor={i} className={done ? 'linea_tachada' : ''}>{deseo}</label>
              </li>
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
};

// creamos un valor por defecto para los valores del array ya que no los creamos como requeridos
ListaDeseos.defaultProps = {
  deseos: [],
};

// exportamos el componente
export default ListaDeseos;
