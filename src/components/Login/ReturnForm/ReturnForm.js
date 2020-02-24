import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
//import { Router, Link } from "@reach/router";

//import LinkToDashboard from '../../LinkToDashboard/LinkToDashboard'

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

const ReturnForm = memo(props => {
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	console.log('signup form');
	return (
		<>
			<h1 style={styles.header}>Welcome Back,</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label style={styles.label}>
					username:
					<input name="userName" ref={register({ required: true })} />
				</label>
				<span style={styles.error}>
					{errors.userName && errors.userName && 'Your input is required'}
				</span>

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

				<input type="submit" />
			</form>
		</>
	);
});

export default ReturnForm;
