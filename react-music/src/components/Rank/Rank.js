import React from 'react';
import 'Rank.css';

const Rank = ({id, title}) => {
	return (
		<div className='Rank'>
		    <p> { id } </p>
		    <p> { title } </p>
		</div>
	)
}

export default Rank;