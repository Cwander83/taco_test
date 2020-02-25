import React from 'react';

const signOutBtn = React.memo(props => {
	return (
		<button className="SignOutBtn" onClick={props.out}>
			sign out
		</button>
	);
});

export default signOutBtn;
