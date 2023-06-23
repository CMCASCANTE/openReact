// importaciones
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// creacion del componente con sus elementos
// nuevoDeseoCreado es una funcion que vamos a crear para
// realizar algo cuando añadamos un deseo y lo gestionamos como prop
function InputDeseo({ nuevoDeseoCreado }) {
  // creamos una variable de estado para guardar el valor del input
  // de modo que cuando demos intro tenga guardado el valor
  // y lo devuelva al padre con el valor y el done
  const [nuevoDeseo, setNuevoDeseo] = useState('');
  return (
    <fieldset>
      <legend>Nuevo deseo</legend>
      <input
        type="text"
        placeholder="Introduce tu deseo"
        value={nuevoDeseo}
        onChange={(e) => setNuevoDeseo(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && nuevoDeseo.length) {
            nuevoDeseoCreado({ done: false, deseo: nuevoDeseo });
            setNuevoDeseo('');
          }
        }}
      />
    </fieldset>
  );
}

// Tipado de las props (en este caso por defecto y vacía)
InputDeseo.propTypes = {
  nuevoDeseoCreado: PropTypes.func,
};
InputDeseo.defaultProps = {
  nuevoDeseoCreado: () => {},
};

// exportamos el componente
export default InputDeseo;
