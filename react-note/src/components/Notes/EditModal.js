import React from 'react';
import { ModalDiv, ModalMain, ModalP, ModalButton } from '../../styles';

const EditModal = props => {
	return (
		<ModalDiv>
			<ModalMain>
				<ModalP>Note updated!</ModalP>
				<ModalButton type="button" onClick={props.getNotes}>
					Okay
				</ModalButton>
			</ModalMain>
		</ModalDiv>
	);
};

export default EditModal;
