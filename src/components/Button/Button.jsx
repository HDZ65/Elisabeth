import PropTypes from 'prop-types';

function Button({ texte }) {
    return (
        <button className=" bg-second-1000 font-Montaga text-slate-100 rounded px-5 py-2 md:hover:bg-third-1000">
            {texte}
        </button>
    )
}

Button.propTypes = {
  texte: PropTypes.string.isRequired,
};

export default Button;