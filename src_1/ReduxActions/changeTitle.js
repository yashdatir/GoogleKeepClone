const changeTitle = (id,title) => {
    return {
      type: "changes_the_title_of_the_note",
      id: id,
      data: title
    };
  };
  
  export default changeTitle;