import React from 'react';
import { Link } from 'react-router-dom';

import {
	NotesContainer,
	SubHeading,
	NotesWrapper,
	NoteCard,
	TitleHeading,
	Hr,
	NoteContent
} from '../../styles';

const NotesList = props => {
	return (
		<NotesContainer>
			<SubHeading>Your Notes:</SubHeading>

			<NotesWrapper>
				{props.notes.map((note, i) => (
					<NoteCard key={i}>
						<Link to={`/notes/${note.id}`} style={{ color: '#000' }}>
							<TitleHeading>{note.title}</TitleHeading>
						</Link>
						<Hr />
						<NoteContent>{note.content}</NoteContent>
					</NoteCard>
				))}
			</NotesWrapper>
		</NotesContainer>
	);
};

export default NotesList;
