import React, { Component } from 'react';

import Card from '../../components/card/Card';

class Dash extends Component {
    state = {
        path: 'descricao'
    }


    render() {
        return (
            <div>
                <Card descricaoUrl={this.state.path} />
                <Card />
                <Card />
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