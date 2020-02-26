import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';

import './Dashboard.css';

import Header from '../../components/Header/Header';
import Auxilitary from '../../hoc/auxilitary';
import TacoChoice from '../../components/TacoChoice/TacoChoice';
import TacoImage from '../../components/TacoImage/TacoImage';
import SignOutBtn from '../../components/SignOutBtn/SingOutBtn';

import usePrevious from '../../hooks/previous/previous';

const Dashboard = ({ history, props }) => {
	const [user, setUser] = useState({
		email: '',
		uid: '',
	});

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setUser({ uid: user.uid, email: user.email });
				setTaco({ user });
			} else {
				history.push('/');
			}
		});
	}, [history]);

	const [taco, setTaco] = useState('');
	// custom hook
	usePrevious(taco);

	useEffect(() => {
		const fetchData = () => {
			if (user.uid) {
				const db = firebase.firestore();

				db.collection('users')
					.doc(`${user.uid}`)
					.get()
					.then(doc => {
						const data = doc.data();
						setTaco(data.taco);
					});
			}
		};
		fetchData();
	}, [user.uid]);

	const signOut = () => {
		firebase.auth().signOut();
	};

	const upDateTaco = x => {
		if (user.uid)
			firebase
				.firestore()
				.collection('users')
				.doc(`${user.uid}`)
				.update({ taco: x });
		setTaco(x);
	};

	return (
		<Auxilitary>
			<SignOutBtn out={signOut} />

			<Header />

			<h1 className="dashTitle">
				Welcome to Dashboard,{' '}
				<span className="userEmail">{user ? user.email : 'unknown'}</span>
			</h1>
			<p className="instructions">
				click on your favorite taco, and i'll save it in the database for you
			</p>
			<TacoChoice taco={taco} />
			<TacoImage update={upDateTaco} />
		</Auxilitary>
	);
};

export default Dashboard;
