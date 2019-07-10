import React from 'react';
import PropTypes from 'prop-types';

const button = ({children, handleClick}) => (
    <button onClick={handleClick}>
        {children}
    </button>
);

button.propTypes = {
    handleClick: PropTypes.func
}

export default button;