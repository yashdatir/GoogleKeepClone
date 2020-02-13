import React, { useState } from "react";
import DeleteIcon from "./DeleteIcon";
import delete_note from "../ReduxActions/deletenote";
import changeTitle from "../ReduxActions/changeTitle";
import changeContent from "../ReduxActions/changeContent";

function UpdateNoteModal({
  index,
  store_notes,
  modal,
  note
}) {
  var [title, setTitle] = useState(note.title);
  var [content, setContent] = useState(note.content);
  var [image, setImage]= useState(note.image);
  var [check_title, setCheck_title] = useState(false);
  var [check_content, setCheck_content] = useState(false);


  // close modal
  const dismissModal = () => {
    modal();
  };

  //stop propagation
  const stopPropagation = e => {
    e.stopPropagation();
  };

  // submit form
  const handleSubmit = e => {
    e.preventDefault();
    if (check_title) {
      store_notes.dispatch(changeTitle(index,title));
    } 
    if (check_content) {
      store_notes.dispatch(changeContent(index,content));
    }
    dismissModal();
  }; // end of handleSubmit

  const handleTitle = e => {
    setTitle((title = e.target.value));
    setCheck_title(true);
  };

  const handleContent = e => {
    setContent((content = e.target.value));
    setCheck_content(true);
  };

  const handleDelete = e => {
    e.preventDefault();

    //const id = mutableNote.id;

    if (window.confirm("Do you really want to delete this note?")) {
      dismissModal();
      store_notes.dispatch(delete_note(index));
    }
  }; // end of handleDelete
  return (
    <div>
      {note && (
        <div className="modal-backdrop" onClick={dismissModal} id="modalBox">
          <div
            className="modal"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalContent"
          >
            <form
              onSubmit={handleSubmit}
              onClick={stopPropagation}
              className="edit-form"
            >
              <input
                id="modalTitle"
                onChange={handleTitle}
                name="title"
                value={title}
                placeholder="Title"
              />

              <textarea
                id="modalContent"
                onChange={handleContent}
                value={content}
                name="content"
                placeholder="Add a note..."
                rows="2"
              />
              {note.image && <img src={note.image} alt="hi" width="20" height="20"></img>}

              <footer className="modal-footer">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="delete-button"
                >
                  <DeleteIcon />
                </button>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="submit-button"
                >
                  <span>Done</span>
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateNoteModal;
