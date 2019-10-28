import React, { Component } from 'react';

import Card from '../../components/card/Card';

class Dash extends Component {
    state = {
        path: 'descricao',
        id: '1'
    }


    render() {
        return (
            <div>
                <Card descricaoUrl={this.state.path} descricaoId="1" />
                <Card descricaoUrl={this.state.path} descricaoId="2" />
                <Card descricaoUrl={this.state.path} descricaoId="3" />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default Dash;