import React, { Component } from 'react';

import Carroussel from '../../components/Carroussel/Carroussel';
import Card from '../../components/Card/Card';
import classes from './Home.css';

class Home extends Component {
    render () {
        return (
            <div>
                <Carroussel />
                <h3 className={classes.tituloProjetos}>Projetos</h3>
                <div className={classes.groupCards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default Home;