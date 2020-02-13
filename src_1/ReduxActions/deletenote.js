const delete_note = id => {
    return {
      type: "delete_note",
      data: id
    };
  };
  
  export default delete_note;
  