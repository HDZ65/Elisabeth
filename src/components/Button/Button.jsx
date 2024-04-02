import PropTypes from 'prop-types';

function Button({ texte, couleur }) {
    return (
        <button className={`${couleur} font-Montaga  rounded px-5 py-2 md:hover:bg-third-1000`}>
            {texte}
        </button>
    )
}

Button.propTypes = {
    texte: PropTypes.string.isRequired,
    couleur: PropTypes.string,
};

export default Button;