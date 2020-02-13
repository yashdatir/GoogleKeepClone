import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './VisibilityFilters'
export default combineReducers({
  todos,
  visibilityFilter
})