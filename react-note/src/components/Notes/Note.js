import React from 'react';
import { Link } from 'react-router-dom';

import { SingleNoteContainer, SingleNoteActions } from '../../styles';
import DeleteModal from './DeleteModal';

const Note = props => {
	return (
		<SingleNoteContainer>
			<SingleNoteActions>
				<Link to={`/edit/${props.note.id}`}>
					<button type="button">Edit</button>
				</Link>
				<DeleteModal
					show={props.show}
					hideModal={props.hideModal}
					deleteNote={props.deleteNote}
					noteID={props.note.id}
				/>

				<button type="button" onClick={props.showModal}>
					Delete
				</button>
			</SingleNoteActions>

			<h2>{props.note.title}</h2>
			<p>{props.note.content}</p>
		</SingleNoteContainer>
	);
};

export default Note;
