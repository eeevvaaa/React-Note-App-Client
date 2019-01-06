import styled from 'styled-components';

export const ModalDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);

	.block {
		display: block;
	}

	.none {
		display: none;
	}
`;

export const ModalMain = styled.div`
	position: fixed;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 45%;
	height: auto;
	border: 1px solid #000;
	padding: 30px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background: #fff;
`;

export const ModalP = styled.p`
	width: 100%;
	text-align: center;
	padding: 20px;
`;

export const ModalButton = styled.button`
	width: 35%;
	margin: 15px;
	border: 1px solid #b7b5b7;
	padding: 15px;
	background-color: #23b8bd;
	font-size: 1.8rem;
	font-weight: bold;
	color: #fff;
	text-decoration: none;
	cursor: pointer;
`;

export const CancelButton = styled.button`
	width: '35%';
	margin: '15px';
	border: '1px solid #b7b5b7';
	padding: '15px';
	background-color: '#23b8bd';
	font-size: '1.8rem';
	font-weight: 'bold';
	color: '#fff';
	text-decoration: 'none';
	cursor: 'pointer';
`;

export const DeleteButton = styled.button`
	width: '35%';
	margin: '15px';
	border: '1px solid #b7b5b7';
	padding: '15px';
	background-color: '#d0011b';
	font-size: '1.8rem';
	font-weight: 'bold';
	color: '#fff';
	text-decoration: 'none';
	cursor: 'pointer';
`;
