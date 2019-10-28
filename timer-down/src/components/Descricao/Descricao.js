import React from 'react';

const Descricao = (props) => {
    const { id } = props.match.params;
    return (
        <div style={{marginTop: '120px'}}><h1>Descricao {id}</h1></div>
    );
}

export default Descricao;