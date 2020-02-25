import React from 'react';

import './TacoChoice.css';

const board = React.memo(props => {
	return (
		<>
			<p>
				Your favorite taco is{' '}
				{props.taco ? `${props.taco}` : 'well lets pick one'}
			</p>
		</>
	);
});

export default board;
