import React from 'react';
import { ModalDiv, ModalMain, ModalP, ModalButton } from '../../styles';

const EditModal = props => {
	const showHideClassName = props.show ? 'block' : 'none';

	return (
		<ModalDiv className={showHideClassName}>
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
