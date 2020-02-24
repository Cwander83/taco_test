import React, { memo } from 'react';

const styles = {
	display: 'flex',
	textAlign: 'center',
	flexDirection: 'column',
};
const centerContainer = memo(props => {
	return <div style={styles}>{props.children}</div>;
});

export default centerContainer;
