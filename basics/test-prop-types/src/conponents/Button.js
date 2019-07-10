import React from 'react';

const button = ({children, handleClick}) => (
    <button onClick={handleClick}>
        {children}
    </button>
);

button.propTypes = {
    
}

export default button;