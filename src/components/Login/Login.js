import React, { memo } from 'react';

const login = memo(props => {
	return (
		<>
			<button
				onClick={() => {
					props.openModal();
					props.click();
				}}
			>
				{props.children}
			</button>
		</>
	);
});

export default login;
