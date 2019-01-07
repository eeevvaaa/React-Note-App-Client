import React from 'react';
import { Link } from 'react-router-dom';

import { SingleNoteContainer, SingleNoteActions } from '../../styles';
import DeleteModal from './DeleteModal';

const Note = props => {
	if (props.show === false) {
		return (
			<SingleNoteContainer>
				<SingleNoteActions>
					<Link to={`/edit/${props.note.id}`}>
						<button type="button">Edit</button>
					</Link>
					<button type="button" onClick={props.toggleModal}>
						Delete
					</button>
				</SingleNoteActions>

				<h2>{props.note.title}</h2>
				<p>{props.note.content}</p>
			</SingleNoteContainer>
		);
	} else {
		return (
			<SingleNoteContainer>
				<SingleNoteActions>
					<Link to={`/edit/${props.note.id}`}>
						<button type="button">Edit</button>
					</Link>
					<button type="button" onClick={props.toggleModal}>
						Delete
					</button>
					<DeleteModal
						show={props.show}
						toggleModal={props.toggleModal}
						deleteNote={props.deleteNote}
						noteID={props.note.id}
					/>
				</SingleNoteActions>

				<h2>{props.note.title}</h2>
				<p>{props.note.content}</p>
			</SingleNoteContainer>
		);
	}
};

export default Note;
