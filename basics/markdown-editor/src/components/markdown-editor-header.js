import React from 'react';

const Header = (props) => (
    <header>
      <button onClick={props.onClicked}>Salvar</button>
    </header>
)

export default Header;