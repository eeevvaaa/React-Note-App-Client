import React from 'react';
import {
	ModalDiv,
	ModalMain,
	ModalP,
	CancelButton,
	DeleteButton
} from '../../styles';

const DeleteModal = props => {
	return (
		<ModalDiv>
			<ModalMain className="modal-main">
				<ModalP>Are you sure you want to delete this?</ModalP>
				<DeleteButton onClick={e => props.deleteNote(e, props.noteID)}>
					Delete
				</DeleteButton>

				<CancelButton onClick={props.toggleModal}>No</CancelButton>
			</ModalMain>
		</ModalDiv>
	);
};

export default DeleteModal;
