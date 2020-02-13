const todos = (state = [], action) => {  
  switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            note: action.note,
            completed: false
          }
        ]
        case 'DEL':
          return[
            ...state,
          ]
      default:
        return state
    }
  }
  export default todos