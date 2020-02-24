import React, { memo } from 'react';

import './Header.css';

import CenterContainer from '../../hoc/CenterContainer';

const header = memo(() => {
	return (
		<CenterContainer>
			<h1 className="title">Taco Test</h1>
			<h2 className="subTitle">Lets find out your favorite taco!!!</h2>
		</CenterContainer>
	);
});

export default header;
