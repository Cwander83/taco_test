import React from 'react';

import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const modal = React.memo(props => {
	return (
		<div>
			<Modal
				ariaHideApp={false}
				isOpen={props.modalState}
				onRequestClose={props.closeModal}
				style={customStyles}
			>
				<div>{props.children}</div>
			</Modal>
		</div>
	);
});

export default modal;
