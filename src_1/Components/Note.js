import React from "react";
import EditIcon from "./EditIcon";

function Note({ selected, index, note}) {
  const hasNotes = note.title || note.content;

  const editNote = () => {
    selected(note,index);
  };
  console.log(note.image)
  return (
    <div className="note" index={index}>
      <div onClick={editNote}>
        <EditIcon />
      </div>
      {hasNotes ? (
        <div>
          {note.title && <h1>{note.title}</h1>}
          {note.content && <pre>{note.content}</pre>}
          {note.image && <img src={note.image} alt="hi"></img>}
        </div>
      ) : (
        <div className="empty">Empty Note</div>
      )}
    </div>
  );
}

export default Note;
