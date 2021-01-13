import React from 'react';
import propTypes from 'prop-types';

function Button({ text, onClick }) {
	  return (
		      <button onClick={onClick} type="button">
		        {text}
		      </button>
		    );
}

Button.propTypes = {
	  text: propTypes.string.isRequired,
	  onClick: propTypes.func,
};

Button.defaultProps = {
	  onClick: null,
};

export default Button;
