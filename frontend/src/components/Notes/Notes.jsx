// App.js
import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { v4 as uuidv4 } from 'uuid';

function Note() {
  const [notes, setNotes] = useState([]);

  // Function to add a new note
  const addNote = (title, description) => {
    const newNote = {
      id: uuidv4(),
      title,
      description
    };
    setNotes([...notes, newNote]);
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Function to update a note
  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  return (
    <div className="container mx-auto py-8 mb-4">
      <h1 className="text-3xl font-bold mb-4">Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default Note;