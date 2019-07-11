import React from 'react';

import classes from './Card.css';

const card = props => (
    <div className={classes.container}>
        <img src={require('../../assets/images/card.jpg')} alt="imagem card1" />
        <h5>Title</h5>
        <span>
            s simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has 
        </span>
        <a href="#">saiba mais...</a>
    </div>
);

export default card;