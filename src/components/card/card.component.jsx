import React from 'react';

import './card.styles.css';

export const Card = props => (
	<div className='card-container'>
		<div className="thumb-wrraper">
			<img alt="hero" src={`${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`} />
		</div>
		<h2> {props.hero.name} </h2>
		<p> {props.hero.email} </p>
	</div>
)
