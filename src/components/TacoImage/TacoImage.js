import React from 'react';

import './TacoImage.css';

import AlPastor from '../../assests/images/alpastor.jpg';
import Asada from '../../assests/images/asada.jpg';
import Barbacoa from '../../assests/images/barbacoa.jpg';
import Carnitas from '../../assests/images/carnitas.jpg';
import Chorizo from '../../assests/images/chorizo.jpg';
import Ground from '../../assests/images/groundbeef.jpg';
import Pescado from '../../assests/images/pescado.jpg';
import Shrimp from '../../assests/images/shrimp.jpg';

const tacoImage = React.memo(props => {
	return (
		<div className="table">
			<div className="row">
				<div className="imgHolder" onClick={() => props.update('Al Paster')}>
					<span className="text-block">Al pastor</span>
					<img src={AlPastor} alt="Al pastor" />
				</div>
				<div className="imgHolder" onClick={() => props.update('Asada Carne')}>
					<span className="text-block">Asada carne</span>
					<img src={Asada} alt="Asada" />
				</div>

				<div className="imgHolder" onClick={() => props.update('barbacoa')}>
					<span className="text-block">Barbacoa</span>
					<img src={Barbacoa} alt="Barbacoa" />
				</div>
				<div className="imgHolder" onClick={() => props.update('Pescado')}>
					<span className="text-block">pescado</span>
					<img src={Pescado} alt="Pescado" />
				</div>
			</div>
			<div className="row">
				<div className="imgHolder" onClick={() => props.update('Carnitas')}>
					<span className="text-block">carnitas</span>
					<img src={Carnitas} alt="Carnitas" />
				</div>
				<div className="imgHolder" onClick={() => props.update('Chorizo')}>
					<span className="text-block">chorizo</span>
					<img src={Chorizo} alt="Chorizo" />
				</div>
				<div className="imgHolder" onClick={() => props.update('Ground Beef')}>
					{' '}
					<span className="text-block">ground beef</span>
					<img src={Ground} alt="Ground" />
				</div>
				<div className="imgHolder" onClick={() => props.update('Shrimp')}>
					<span className="text-block">shrimp</span>
					<img src={Shrimp} alt="Shrimp" />
				</div>
			</div>
		</div>
	);
});

export default tacoImage;
