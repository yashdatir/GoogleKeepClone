const changeContent = (id,content) => {
    return {
      type: "changes_the_content_of_the_note",
      id: id,
      data: content
    };
  };
  
  export default changeContent;
  