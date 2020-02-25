import React, { useState } from 'react';


import './Landing.css';

import StreetTacos from '../../assests/images/MSC.jpg';

import Header from '../../components/Header/Header';
import Auxilitary from '../../hoc/auxilitary';
import Login from '../../components/Login/Login';
import Modal from '../../components/Modal/Modal';
import SignUpForm from '../../components/Login/SignUpForm/SignUpForm';
import ReturnForm from '../../components/Login/ReturnForm/ReturnForm';

const Landing = props => {
	
	const [modalState, setModalState] = useState(false);
	const [signUp, setSignUp] = useState();

	const openModal = () => {
		setModalState(true);
	};

	const closeModal = () => {
		setModalState(false);
	};

	const signUpHandler = x => {
		setSignUp(x);
	};

	return (
		<Auxilitary>
			<Header />
			<div className="section">
				<img className="landingImg" alt="tacos" src={StreetTacos} />
				<div className="pBox">
					<p>
						The <span style={{ color: 'red', fontWeight: 800 }}>Taco </span> is
						a traditional Mexican dish served with a circular corn tortilla
						filled with a protein, cilantro, onion, and cheese. A common form of
						antojitos, or Mexican street food, which have spread around the
						world. Often garnished with various condiments, such as salsa,
						guacamole, or sour cream, and vegetables, such as lettuce, tomatoes,
						and chiles.
					</p>
				</div>
			</div>
			<div className="btnRow">
				<Login openModal={openModal} click={x => signUpHandler(true)}>
					Sign Up
				</Login>

				<Login openModal={openModal} click={x => signUpHandler(false)}>
					Returning Users
				</Login>
			</div>
			<Modal
				modalState={modalState}
				openModal={openModal}
				closeModal={closeModal}
			>
				{signUp ? <SignUpForm /> : <ReturnForm />}
			</Modal>
		</Auxilitary>
	);
};

export default Landing;
