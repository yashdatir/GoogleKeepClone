import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
      case 'ADD_TODO':
        return state 
      case 'DEL':
        return state
    default:
      return state
  }
}
export default visibilityFilter