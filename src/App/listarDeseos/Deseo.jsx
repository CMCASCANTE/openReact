// importaciones
import React from 'react';
import PropTypes from 'prop-types';

// componente
// creamos el elemento con las propiedades que vienen del padre
// y añadimos una propiedad para avisar del cambio del estado de done
function Deseo({
  deseo, done, id, doneChange,
}) {
  return (
    <li>
      <input
        type="checkbox"
        name={deseo}
        id={id}
        checked={done}
        onChange={(e) => doneChange(e.target.checked)}
      />
      <label htmlFor={id} className={done ? 'linea_tachada' : ''}>{deseo}</label>
    </li>
  );
}

// tipado
Deseo.propTypes = {
  deseo: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  doneChange: PropTypes.func,
};
Deseo.defaultProps = {
  doneChange: () => {},
};

// exportación
export default Deseo;
