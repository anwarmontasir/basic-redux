import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';
import Note from './Note';
import NoteForm from './NoteForm';

class Notes extends Component {

  render() {
    const { notes, addNote } = this.props;
    return (
      <div>
        <NoteForm onEdit={addNote} />
        <ul>
          {notes.map(note => <Note key={note.id} {...note} />)}
        </ul>
      </div>
    );
  }
}

export default connect (
  // map state to props
  state => ({ notes: state }),
  // map dispatch to props
  { addNote }
)(Notes);