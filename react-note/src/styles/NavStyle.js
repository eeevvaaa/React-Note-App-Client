import styled from 'styled-components';

// NAVIGATION STYLES
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 30%;
	min-height: 100vh;
	max-height: 100%;
	border-right: 1px solid #b7b5b7;
	background-color: #d3d2d3;
`;

export const Wrapper = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 5%;
	max-height: 100%;
	flex-direction: column;
`;

export const Heading = styled.h1`
	width: 80%;
	margin-bottom: 20px;
	font-size: 4.5rem;
	font-weight: bold;
	color: #4b4b4a;
`;

export const NavButton = styled.button`
	margin: 10px 0;
	border-color: #b7b5b7;
	padding: 20px;
	background-color: #23b8bd;
	font-size: 1.8rem;
	font-weight: bold;
	cursor: pointer;
	a {
		color: #fff;
	}
	width: 100%;
	color: #fff;
`;
