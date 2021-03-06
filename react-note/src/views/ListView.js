import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../store/actions';

import { NoteList } from '../components/Notes';

class ListView extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		if (this.props.gettingNotes) {
			return <h1>Loading Notes...</h1>;
		}

		return <NoteList notes={this.props.notes} />;
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes,
		gettingNotes: state.gettingNotes,
		editedNote: state.editedNote
	};
};

export default connect(
	mapStateToProps,
	{ getNotes }
)(ListView);
