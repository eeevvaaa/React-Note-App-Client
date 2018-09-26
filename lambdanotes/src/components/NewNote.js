import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
      <NewNoteDiv>
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
      </NewNoteDiv>
    );
  }
}

const NewNoteDiv = styled.div`
  box-sizing: border-box;
  border: 1px solid #BEBEBE;
  background-color: #F3F3F3;
  min-width: 1000px;
  min-height: 1000px;
  padding: 0 30px;

  h3 {
    color: #4A494A;
    margin-top: 50px;
  }

  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    
    input:first-child {
      border: 1px solid #BEBEBE;
      border-radius: 3px;
      width: 380px;
      height: 40px;
      margin: 15px 0;
    }

    &:last-child {
      border: 1px solid #BEBEBE;
      border-radius: 3px;
      width: 500px;
      height: 300px;
      margin: 15px 0;
    }
  }
`