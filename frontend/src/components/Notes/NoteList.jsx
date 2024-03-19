// components/NoteList.js

import { useState } from 'react';

const NoteList = (prop) => {
    const { notes, deleteNote, updateNote } = prop
  const [editingNote, setEditingNote] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleEdit = (note) => {
    setEditingNote(note.id);
    setUpdatedTitle(note.title);
    setUpdatedDescription(note.description);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setUpdatedTitle('');
    setUpdatedDescription('');
  };

  const handleSaveEdit = (note) => {
    if (!updatedTitle || !updatedDescription) return;
    updateNote(note.id, { id: note.id, title: updatedTitle, description: updatedDescription });
    setEditingNote(null);
    setUpdatedTitle('');
    setUpdatedDescription('');
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="bg-white shadow-md rounded-md p-4 mb-4">
          {editingNote === note.id ? (
            <div>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mb-2"
                required
              />
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mb-2"
                required
              ></textarea>
              <button
                onClick={() => handleSaveEdit(note)}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
              <p className="text-gray-700 mb-2">{note.description}</p>
              <div>
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
