import React from 'react';
import PropTypes from 'prop-types';
import DataItems from './DataItems';
const Todo = ({ onClick,completed, text, note }) => (
  <DataItems title={text} note={note} onClick={onClick} />
)
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
}
export default Todo