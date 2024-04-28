import PropTypes from 'prop-types';

function Accompagnement({ title, content }) {
    return (
      <article className='flex flex-col items-center justify-center gap-4  m-auto pb-8 text-black-1000'>
        <h4 className='text-2xl font-Montaga underline text-first-1000'>{title}</h4>
        <p className='text-center font-poppins'>{content}</p>
      </article>
    );
}

Accompagnement.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accompagnement;
