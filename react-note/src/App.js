import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { getNotes } from './store/actions';
import { Navigation } from './components/Nav';
import { DetailView, NewView, ListView, EditView } from './views';
import { Register, Login } from './components/Auth';
import axios from 'axios';

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
				<div className="app-container">
					<Navigation logOut={this.logOut} />

					<div className="content-container">
						<div className="content-wrapper">
							<Route exact path="/" component={ListView} />
							<Route path="/notes/:id" component={DetailView} />
							<Route path="/create" component={NewView} />
							<Route path="/edit/:id" component={EditView} />
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="app-container">
					<div className="auth-wrapper">
						<div className="nav-wrapper">
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
						</div>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
					</div>
				</div>
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
