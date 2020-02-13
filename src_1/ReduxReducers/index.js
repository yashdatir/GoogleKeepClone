import noOfNotes from './noOfNotes';
import notes from './notes';
import { combineReducers } from 'redux'

const allReducers=combineReducers({
  noOfNotes,notes
})

export default allReducers;
