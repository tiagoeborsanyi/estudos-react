import React from 'react';

import './Descricao.css';
//https://ticketagora.com.br/e/festival-da-montanha-2019-28813

const Descricao = (props) => {
    const { id } = props.match.params;
    return (
        <div className="row">
            <div className="col s12 logo-folder">
                <img src={require('./montanha2.jpeg')} alt="montanha" />
            </div>
            <div className="col s8">
                <h3>Festival da montanha 2019</h3>
                <span>INSTITUTO ALOUATTA</span>
                <span>09/11/2019</span>
                <span>Barragem do Rio São Bento - Siderópolis SC, Siderópolis, SC, Brasil</span>
            </div>
            <div className="col s4">6-columns (one-half)</div>
        </div>
    );
}

export default Descricao;