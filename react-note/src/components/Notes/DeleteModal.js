import React from 'react';
import {
	ModalDiv,
	ModalMain,
	ModalP,
	CancelButton,
	DeleteButton
} from '../../styles';

const DeleteModal = props => {
	const showHideClassName = props.show ? 'block' : 'none';

	return (
		<ModalDiv className={showHideClassName}>
			<ModalMain className="modal-main">
				<ModalP>Are you sure you want to delete this?</ModalP>
				<DeleteButton onClick={e => props.deleteNote(e, props.noteID)}>
					Delete
				</DeleteButton>

				<CancelButton onClick={props.hideModal}>No</CancelButton>
			</ModalMain>
		</ModalDiv>
	);
};

export default DeleteModal;
