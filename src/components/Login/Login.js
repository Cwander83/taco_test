import React, { memo } from 'react';

const login = memo(props => {
	return (
		<>
			<button
			className="loginBtn"
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
