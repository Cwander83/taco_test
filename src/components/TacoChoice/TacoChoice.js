import React from 'react';

import './TacoChoice.css';

const tacoChoice = React.memo(props => {
	return (
		<>
			<h4 className="choice">
				Your favorite taco is:{' '}
				{props.taco ? ` ${props.taco} ` : ' well... lets pick one'}
			</h4>
		</>
	);
});

export default tacoChoice;
