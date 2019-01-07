import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, getNote, deleteNote } from '../store/actions';

import { Note } from '../components/Notes';

class DetailView extends Component {
	state = { show: false };

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getNote(id);
	}

	deleteNote = (e, id) => {
		e.preventDefault();
		this.props.deleteNote(id);
		this.props.getNotes();
		this.props.history.push('/');
	};

	toggleModal = e => {
		e.preventDefault();
		this.setState({ show: !this.state.show });
	};

	render() {
		const note = this.props.note;

		if (this.props.gettingNote) {
			return <h2>Loading note...</h2>;
		}

		if (note) {
			return (
				<Note
					note={note}
					deleteNote={this.deleteNote}
					toggleModal={this.toggleModal}
					show={this.state.show}
				/>
			);
		} else {
			return <h2>404: Note Not Found</h2>;
		}
	}
}

const mapStateToProps = state => {
	return {
		note: state.note,
		gettingNote: state.gettingNote
	};
};

export default connect(
	mapStateToProps,
	{ getNotes, getNote, deleteNote }
)(DetailView);
