import React from "react";
import Note from "../Note/note";

const NoteList = ({ notes, deleteButt, edit }) => {
  return (
    <div className="d-flex container my-3 row justify-content-center noteList">
      {notes.length === 0 ? (
        <h4 className="text-warning">Please add a note</h4>
      ) : (
        notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              deleteHandler={deleteButt}
              edit={edit}
            ></Note>
          );
        })
      )}
    </div>
  );
};

export default NoteList;
