import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100 vw;
	height: 100 vh;
`;

export const RightContainer = styled.div`
	width: 70%;
	height: 100 vh;
	margin-left: 30%;
	background-color: #f2f2f2;
`;

export const NoteContainer = styled.div`
	margin: 40px 2%;
	min-height: 100vh;
	max-height: 100%;
`;

export const AuthContainer = styled.div`
	border: 1px solid #e7e7e7;
	border-radius: 5px;
	min-width: 400px;
	margin: 120px auto;
	background-color: #e7e7e7;
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	h2 {
		width: 100%;
		padding-top: 25px;
		margin: 20px 0;
		text-align: center;
		font-size: 4rem;
		font-weight: bold;
		color: #4b4b4a;
	}
	a {
		margin: 5px;
		font-size: 1.8rem;
		font-weight: bold;
		color: #4b4b4a;
	}
`;
