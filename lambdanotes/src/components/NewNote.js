import React, { Component } from 'react';
import axios from 'axios';

export default class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  addNewNote = event => {
    event.preventDefault();
    axios
    .post('https://killer-notes.herokuapp.com/note/create', this.state)
    .then(() => this.props.history.push('/'))
    .catch(err => {
      console.error(err);
    });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div className='new-note'>
        <h3>Create New Note:</h3>
        <form onSubmit={this.addNewNote}>
          <input 
            type='text'
            onChange={this.handleInput}
            placeholder='Note Title'
            value={this.state.title}
            name='title'
          />
          <input 
            type='text'
            onChange={this.handleInput}
            placeholder='Note Content'
            value={this.state.textBody}
            name='textBody'
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}