import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { getNotes } from './store/actions';
import { Navigation } from './components/Nav';
import { DetailView, NewView, ListView, EditView } from './views';
import { Register, Login } from './components/Auth';
import axios from 'axios';
import {
	AppContainer,
	RightContainer,
	NoteContainer,
	AuthContainer,
	NavContainer
} from './styles';

class App extends Component {
	state = {
		loggedIn: false,
		users: []
	};

	componentDidMount() {
		this.authenticate();
	}

	authenticate = () => {
		const url = 'https://agile-bastion-89851.herokuapp.com/api/notes';
		const token = localStorage.getItem('jwtToken');
		const options = {
			headers: {
				Authorization: token
			}
		};

		if (token) {
			axios
				.get(url, options)
				.then(res => {
					if (res.status === 200 && res.data) {
						this.setState({ loggedIn: true, users: res.data });
					} else {
						throw new Error();
					}
				})
				.catch(err => this.props.history.push('/login'));
		} else {
			this.props.history.push('/login');
		}
	};

	componentDidUpdate(prevProps) {
		const { pathname } = this.props.location;
		if (pathname === '/' && pathname !== prevProps.location.pathname) {
			this.authenticate();
		}
	}

	logOut = () => {
		localStorage.removeItem('jwtToken');
		this.setState({ loggedIn: false });
		this.props.history.push('/login');
	};

	render() {
		if (this.state.loggedIn) {
			return (
				<AppContainer>
					<Navigation logOut={this.logOut} />

					<RightContainer>
						<NoteContainer>
							<Route exact path="/" component={ListView} />
							<Route path="/notes/:id" component={DetailView} />
							<Route path="/new" component={NewView} />
							<Route path="/edit/:id" component={EditView} />
						</NoteContainer>
					</RightContainer>
				</AppContainer>
			);
		} else {
			return (
				<AppContainer>
					<AuthContainer>
						<NavContainer>
							<h2>React Notes</h2>
							<nav>
								<NavLink
									to="/register"
									activeStyle={{
										borderBottom: '2px solid #23b8bd'
									}}
								>
									Register
								</NavLink>
								&nbsp;<span style={{ color: '#4b4b4a' }}>|</span>&nbsp;
								<NavLink
									to="/login"
									activeStyle={{
										borderBottom: '2px solid #23b8bd'
									}}
								>
									Login
								</NavLink>
							</nav>
						</NavContainer>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
					</AuthContainer>
				</AppContainer>
			);
		}
	}
}

export default withRouter(
	connect(
		null,
		{ getNotes }
	)(App)
);
