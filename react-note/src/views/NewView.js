import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, getNotes } from '../store/actions';

import { NewNote } from '../components/Notes';

class NewView extends Component {
	state = {
		title: '',
		content: ''
	};

	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNote = e => {
		e.preventDefault();
		const { title, content } = this.state;
		this.props.addNote({ title, content });
		this.setState({ title: '', content: '' });
		this.props.getNotes();
		this.props.history.push('/');
	};

	render() {
		return (
			<NewNote
				addNote={this.addNote}
				handleInput={this.handleInput}
				title={this.state.title}
				content={this.state.content}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		gettingNotes: state.gettingNotes
	};
};

export default connect(
	mapStateToProps,
	{ addNote, getNotes }
)(NewView);
