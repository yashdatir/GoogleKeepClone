import React, { useState } from "react";

import add_note from "../ReduxActions/addNote";


function AddNoteForm({store_notes, note_changed, store_no_of_notes}) {

  const [titleFieldVisible, setTitleFieldVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image,setImage]=useState("");

  const showTitleField = () => {
    setTitleFieldVisible(true);
  };

  const hideTitleField = () => {
    setTitleFieldVisible(false);
  };

  // submit form

  const handleSubmit = e => {
    e.preventDefault();

    if (title || content || image) {
      const a = {title: title, content: content, image:image};
      store_notes.dispatch(add_note(a))
      note_changed()
      setTitle("");
      setContent("");
      setImage("");
      setTitleFieldVisible("false");
    }
  };
  const image_entered=(e)=>{
    let a=e.target.files
    let b=new FileReader();
    b.readAsDataURL(a[0])
    b.onload=(e)=>{
      setImage(e.target.result)
    }
    //console.log(e.target.files[0])
    // var b= new File([Blob],e.target.files.File,{type:"image/jpeg"});
    // var c= URL.createObjectURL(b);
    setImage('hi')
  }
  return (
    <div>
      <div className="create-form">
        {titleFieldVisible && (
          <div className="backdrop" onClick={hideTitleField} />
        )}

        <form onSubmit={handleSubmit} className="create-note">
          {titleFieldVisible && (
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onFocus={showTitleField}
              name="title"
              placeholder="Title"
            />
          )}

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            onFocus={showTitleField}
            name="content"
            placeholder="Take a note..."
          />

          {titleFieldVisible && (
            <input
              type="file"
              onChange={image_entered}
              onFocus={showTitleField}
            />
          )}
          <button type="Submit">
            <span>&#43;</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNoteForm;
