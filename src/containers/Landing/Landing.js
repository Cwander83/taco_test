import React from 'react';

import './Landing.css';

import StreetTacos from '../../assests/images/MSC.jpg';

import Header from '../../components/Header/Header';
import Auxilitary from '../../hoc/auxilitary';
import Return from '../../components/Login/Return/Return';
import SignUp from '../../components/Login/SignUp/SignUp';

const Landing = props => {
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
				<SignUp />

				<Return />
			</div>
		</Auxilitary>
	);
};

export default Landing;
