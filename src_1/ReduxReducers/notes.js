const notes = (store = [], action) => {
    switch (action.type) {
      case "add_note":
        return (store = [...store, action.data]);
      case "delete_note":
        return (store = store.filter((nts,index) => {
          if (index !== action.data) {
            return nts;
          }
        }));
      case "changes_the_title_of_the_note":
        return(store = store.map((nts,index) => {
          if (index !== action.id) {
            return nts;
          }
          else {
            return {
            'title':action.data,
              'content':nts.content}
          }
        }));
      case "changes_the_content_of_the_note":
        return(store = store.map((nts,index) => {
          if (index!== action.id) {
            return nts;
          }
          else {
            return {
            'title':nts.title,
              'content':action.data}
          }
        }));
    }
  };
  
  export default notes;
  