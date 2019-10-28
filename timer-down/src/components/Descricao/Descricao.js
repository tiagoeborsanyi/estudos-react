import React from 'react';

import './Descricao.css';

const Descricao = (props) => {
    const { id } = props.match.params;
    return (
        <div style={{marginTop: '120px'}} className="container"><h1>Descricao {id}</h1></div>
    );
}

export default Descricao;