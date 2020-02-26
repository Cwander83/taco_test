import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import SignUpForm from '../components/Login/SignUpForm/SignUpForm';
import ReturnForm from '../components/Login/ReturnForm/ReturnForm';
import Dashboard from '../pages/Dashboard/Dashboard';
import { AuthProvider } from '../context/auth-context';
import PrivateRoute from '../PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<Route exact path="/signup" component={SignUpForm} />
					<Route exact path="/return" component={ReturnForm} />
					<Route exact path="/" component={Landing} />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
