import React from 'react';

import { Link, Router } from '@reach/router';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Landing from '../../containers/Landing/Landing';

const linkToDashboard = () => {
	return (
		<>
			<Link to="/dashboard">
				Awesome! you're in, let's head to the Dashboard
			</Link>
			<Router>
				<Landing path="/" />
				<Dashboard path="/dashboard" />
			</Router>
		</>
	);
};
export default linkToDashboard;
