import React, { Component } from 'react';
// import './App.css';
import Navigation from './components/Nav/Navigation';
import { Route } from 'react-router-dom';
import { NoteList, Note, NewNote, EditNote } from './components/Notes';
import styled from 'styled-components';
// import DeleteNote from './components/DeleteNote';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			note: null
		};
	}

	render() {
		return (
			<AppDiv>
				<Navigation />
				<div className="note-container">
					<Route exact path="/" component={NoteList} />
					<Route
						exact
						path="/notes/:id"
						render={props => <Note {...props} />}
					/>
					<Route path="/new" component={NewNote} />
					{/* <Route path='/notes/:id/edit' render={props => (<EditNote {...props} />)} /> */}
					<Route path="/notes/:id/edit" component={EditNote} />
					{/* <Route path='/notes/:id/delete' component={DeleteNote} /> */}
				</div>
			</AppDiv>
		);
	}
}

export default App;

const AppDiv = styled.div`
	display: flex;
`;
