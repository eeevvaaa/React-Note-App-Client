import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Wrapper, Heading, NavButton } from '../../styles';

export default class Navigation extends Component {
	render() {
		return (
			<Container>
				<Wrapper>
					<Heading>
						React
						<br />
						Notes
					</Heading>
					<NavButton>
						<NavLink className="button" exact to="/">
							View Your Notes
						</NavLink>
					</NavButton>
					<NavButton>
						<NavLink className="button" to="/new">
							+ Create New Note
						</NavLink>
					</NavButton>
					<NavButton>
						<NavLink className="button" to="/logout">
							Log Out
						</NavLink>
					</NavButton>
				</Wrapper>
			</Container>
		);
	}
}
