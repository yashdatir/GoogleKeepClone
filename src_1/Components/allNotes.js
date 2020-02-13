import React from "react";
import Note from "./Note";

function AllNotes({ store_notes, selected }) {
    const allnotes=store_notes.getState()
  return (
    <div className="notes">
      {allnotes &&
        allnotes.map((nts, index) => (
          <Note selected={selected} index={index} note={nts} />
        ))}
    </div>
  );
}

export default AllNotes;