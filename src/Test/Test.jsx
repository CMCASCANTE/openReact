import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FullName({ name, surname }) {
  const [fullname, setFullname] = useState();
  useEffect(() => {
    setFullname(`${name} ${surname}`);
  }, [name, surname]);
  return (
    <div>
      Creado por
      {' '}
      {fullname}
    </div>
  );
}

FullName.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};

export default FullName;
