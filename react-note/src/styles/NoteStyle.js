import styled from 'styled-components';

// NotesList component
export const NotesContainer = styled.div`
	max-height: 100%;
`;

export const SubHeading = styled.h2`
	margin-top: 25px;
	margin-left: 2%;
	font-weight: bold;
	font-size: 2.5rem;
	color: #4b4b4a;
`;

export const NotesWrapper = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	max-height: 100%;
	margin: 30px 0;
	flex-wrap: wrap;
`;

export const NoteCard = styled.div`
	width: 29%;
	height: 280px;
	margin: 0 2%;
	margin-bottom: 30px;
	border: 1px solid #b7b5b7;
	padding: 20px;
	background-color: #fff;
`;

export const TitleHeading = styled.h3`
	font-size: 2rem;
	font-weight: bold;
	word-break: break-word;
`;

export const Hr = styled.hr`
	border: 1px solid #b7b5b7;
`;

export const TextBody = styled.p`
	height: 170px;
	font-size: 1.4rem;
	line-height: 25px;
	color: #4b4b4a;
	word-break: break-all;
	overflow: hidden;
`;

// SingleNote component
export const SingleNoteContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	flex-wrap: wrap;
	h2,
	p {
		width: 98%;
		color: #4b4b4a;
	}
	h2 {
		margin: 20px 0;
		font-weight: bold;
		font-size: 2.5rem;
	}
	p {
		font-size: 1.6rem;
		line-height: 25px;
		word-break: break-all;
	}
`;

export const SingleNoteActions = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	width: 98%;
	button {
		margin-left: 1%;
		border: none;
		text-decoration: underline;
		background-color: transparent;
		color: #4b4b4a;
		font-weight: bold;
		font-size: 1.6rem;
		cursor: pointer;
	}
`;

// Create/Edit Form
export const FormContainer = styled.div`
	h3 {
		margin-bottom: 20px;
		font-weight: bold;
		font-size: 2.5rem;
		color: #4b4b4a;
	}
`;

export const FormGroup = styled.form`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	input,
	textarea {
		margin-bottom: 20px;
		border: 1px solid #b7b5b7;
		border-radius: 3px;
		font-size: 1.6rem;
		padding: 15px 10px;
	}
	input {
		width: 50%;
		height: 35px;
	}
	textarea {
		width: 98%;
		height: 450px;
	}
`;

export const ActionButton = styled.button`
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
	width: 30%;
	color: #fff;
	font-size: 2rem;
	padding: 15px 0;
`;
