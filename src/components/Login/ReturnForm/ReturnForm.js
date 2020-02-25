import React, { memo, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import firebase from '../../../firebase.js';
import { withRouter } from 'react-router';

const styles = {
	header: {
		color: 'black',
	},
	label: {
		color: 'black',
	},
	error: {
		color: 'red',
	},
};

const ReturnForm = memo(({ history, props }) => {
	const [dbError, setDbError] = useState('');
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = useCallback(
		data => {
			firebase
				.auth()
				.signInWithEmailAndPassword(data.email, data.password)

				.then(() => {
				
					history.push('/dashboard');
				})
				.catch(error => {
					// Error on the firebase
					switch (error.code) {
						case 'auth/email-already-in-use':
							setDbError(`Email address ${data.email} already in use.`);
							break;
						case 'auth/invalid-email':
							setDbError(`Email address ${data.email} is invalid.`);
							break;
						case 'auth/operation-not-allowed':
							setDbError(`Error during sign up.`);
							break;
						case 'auth/weak-password':
							setDbError(
								'Password is not strong enough. Add additional characters including special characters and numbers.'
							);
							break;
						default:
							setDbError(error.message);
							console.log(error.message);
							break;
					}
				});

			
		},
		[history]
	);

	console.log('return form');
	return (
		<>
			<h1 style={styles.header}>Welcome Back,</h1>
			<span style={styles.error}>{dbError}</span>
			<form onSubmit={handleSubmit(onSubmit)}>
						<label style={styles.label}>
							email
							<input
								name="email"
								ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
							/>
						</label>
						<span style={styles.error}>
							{errors.email &&
								errors.email.type === 'required' &&
								'email is required'}
							{errors.email &&
								errors.email.type === 'pattern' &&
								'bob@email.com format is required'}
						</span>
						<label style={styles.label}>
							password:
							<input
								name="password"
								ref={register({
									required: true,
									minLength: 8,
								})}
							/>
						</label>
						<span style={styles.error}>
							{errors.password &&
								errors.password.type === 'required' &&
								'Your input is required'}
							{errors.password &&
								errors.password.type === 'minLength' &&
								'At least 8 characters is required'}
						</span>

						<input type="submit" />
					</form>
		</>
	);
});

export default withRouter(ReturnForm);
