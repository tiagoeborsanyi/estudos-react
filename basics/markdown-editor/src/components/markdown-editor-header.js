import React, { PropTypes} from 'react'

const Header = (props) => (
    <header>
      <p>{ props.isSaving ? 'Salvando...' : 'Salvo' }</p>
      <button onClick={props.handleCreate}>Criar Novo</button>
      <button onClick={props.handleRemove}>Remover</button>
    </header>
)

Header.prototypes = {
    isSaving: PropTypes.bool.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired
}

export default Header;