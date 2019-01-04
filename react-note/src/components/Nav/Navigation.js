import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';

export default class Navigation extends Component {
	render() {
		return (
			<NavDiv>
				<h1>
					React
					<br />
					Notes
				</h1>
				<NavLink className="button" exact to="/">
					View Your Notes
				</NavLink>
				<NavLink className="button" to="/new">
					+ Create New Note
				</NavLink>
			</NavDiv>
		);
	}
}

const NavDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100% vh;
	background-color: #d7d7d7;
	padding-left: 15px;
	padding-right: 15px;
	border: 1px solid #bebebe;

	h1 {
		color: #4a494a;
		font-size: 38px;
		line-height: 35px;
	}

	.button {
		box-sizing: border-box;
		height: 50px;
		width: 220px;
		background-color: #2ac0c4;
		color: #ffffff;
		text-decoration: none;
		font-weight: bold;
		margin: 15px 0;
		text-align: center;
		line-height: 50px;
		border: 1px solid #bebebe;
	}
`;
