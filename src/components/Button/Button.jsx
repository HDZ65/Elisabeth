import PropTypes from 'prop-types';
import React from 'react';

const Button = React.memo(({ couleur, texte }) => {
  return (
    <button className={`py-2 px-4 ${couleur}`}>{texte}</button>
  );
});

Button.displayName = 'Button';

export default Button;

Button.propTypes = {
    texte: PropTypes.string.isRequired,
    couleur: PropTypes.string,
};