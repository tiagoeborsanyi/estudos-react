import React from 'react';

import './Card.css';

const Card = () => (
    <article className="content">
        <div className="item_grid">
        <figure className="image">
            <img src={require("./escalada.png")} />
        </figure>
        <div className="wrapper">
            <header className="entry-content">
            <a href="#">
                <time className="data">
                <span className="year">2019</span>
                <span className="day">30</span>
                <span className="month">Out</span>
                </time>
                <div className="titulo_evento">
                <h2 className="entry_title">Festival de montanha</h2>
                </div>
                <div className="clearfix">
                </div>
                <div className="row_info">
                <div className="citie">
                    <span>São Paulo</span>
                </div>
                </div>
            </a>
            </header>
        </div>
        </div>
    </article>
);

export default Card;