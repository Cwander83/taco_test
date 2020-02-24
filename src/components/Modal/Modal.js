import React from 'react';
import ReactDOM from 'react-dom';
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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement');

const modal = memo(props => {
	this.state = {
		modalIsOpen: false,
	};

	const openModal = () => {
		//this.setState({ modalIsOpen: true });
	};

	const afterOpenModal = () => {
		// references are now sync'd and can be accessed.
	//	this.subtitle.style.color = '#f00';
	};

	const closeModal = () => {
	//	this.setState({ modalIsOpen: false });
	};

	return (
		<div>
			<button onClick={this.openModal}>Open Modal</button>
			<Modal
				isOpen={this.state.modalIsOpen}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
				<button onClick={this.closeModal}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</div>
	);
});

ReactDOM.render(<App />, appElement);
