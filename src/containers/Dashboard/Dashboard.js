import React from 'react';
//import { Link, Router } from '@reach/router';
//import firebase from '../../firebase'

import './Dashboard.css';

import Header from '../../components/Header/Header';
import Auxilitary from '../../hoc/auxilitary';

const Dashboard = props => {
	// useEffect (()=> {
	// 	firebase.auth().onAuthStateChanged(user =>{
	// 		if (user)
	// 	})
	// },[])
	return (
		<Auxilitary>
			<Header />
			<h1>Welcome to Dashboard</h1>
		</Auxilitary>
	);
};

export default Dashboard;
