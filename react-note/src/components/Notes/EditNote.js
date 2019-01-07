import React from 'react';

import { FormContainer, FormGroup, ActionButton } from '../../styles';
import EditModal from './EditModal';

const EditNote = props => {
	return (
		<FormContainer>
			<h2>Edit Note:</h2>

			<FormGroup onSubmit={e => props.editNote(e, props.note.id)}>
				<input
					type="text"
					placeholder="Note Title"
					onChange={props.handleInput}
					name="title"
					value={props.title}
				/>

				<textarea
					type="text"
					placeholder="Note Content"
					onChange={props.handleInput}
					name="content"
					value={props.content}
				/>

				<ActionButton type="submit" onClick={props.showModal}>
					Update
				</ActionButton>
				<EditModal
					show={props.show}
					hideModal={props.hideModal}
					getNotes={props.getNotes}
				/>
			</FormGroup>
		</FormContainer>
	);
};

export default EditNote;
