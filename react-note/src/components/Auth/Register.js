import React, { Component } from 'react';
import axios from 'axios';
import {
	AuthFormContainer,
	AuthForm,
	FormDiv,
	FormInput,
	Button
} from '../../styles';

const initialUser = {
	username: '',
	password: ''
};

class Register extends Component {
	state = {
		user: { ...initialUser },
		message: ''
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({ user: { ...this.state.user, [name]: value } });
	};

	handleSubmit = e => {
		e.preventDefault();
		const url = 'https://agile-bastion-89851.herokuapp.com/api/users/register';

		axios
			.post(url, this.state.user)
			.then(res => {
				localStorage.setItem('jwtToken', res.data.token);
				this.props.history.push('/login');
			})
			.catch(err => {
				console.log('err', err);
				this.setState({
					message: 'Authentication failed',
					user: { ...initialUser }
				});
			});
	};

	render() {
		return (
			<AuthFormContainer>
				<AuthForm onSubmit={this.handleSubmit}>
					<FormDiv>
						<FormInput
							placeholder="Enter username"
							name="username"
							value={this.state.username}
							onChange={this.handleInputChange}
							type="text"
							required
						/>
					</FormDiv>
					<FormDiv>
						<FormInput
							placeholder="Enter password"
							name="password"
							value={this.state.password}
							onChange={this.handleInputChange}
							type="password"
							required
						/>
					</FormDiv>
					<FormDiv>
						<Button>Register</Button>
					</FormDiv>
				</AuthForm>
				{this.state.message ? <h4>{this.state.message}</h4> : undefined}
			</AuthFormContainer>
		);
	}
}

export default Register;
