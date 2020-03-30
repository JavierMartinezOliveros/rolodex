import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="hero" src={`https://robohash.org/${props.hero.id}?set=set1&size=180x180`} />
        <h2> { props.hero.name } </h2>
        <p> { props.hero.email} </p>
    </div>
)
