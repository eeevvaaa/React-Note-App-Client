import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, getNote, editNote } from '../store/actions';

import { EditNote } from '../components/Notes';

class EditView extends Component {
	state = {
		title: this.props.note.title,
		content: this.props.note.content,
		show: false
	};

	componentDidMount() {
		this.props.getNote(this.props.match.params.id);
	}

	toggleModal = () => {
		this.setState({ show: !this.state.show });
	};

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	editNote = (e, id) => {
		e.preventDefault();
		const { title, content } = this.state;
		this.props.editNote(id, { title, content });
		this.setState({ title: '', content: '' });
	};

	getNotes = () => {
		this.props.getNotes();
		this.props.history.push('/');
	};

	render() {
		const note = this.props.note;

		return (
			<EditNote
				editNote={this.editNote}
				handleInput={this.handleInput}
				title={this.state.title}
				content={this.state.content}
				note={note}
				getNotes={this.getNotes}
				toggleModal={this.toggleModal}
				show={this.state.show}
			/>
		);
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
	{ getNotes, getNote, editNote }
)(EditView);
