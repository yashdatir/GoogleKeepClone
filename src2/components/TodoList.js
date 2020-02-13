import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
const TodoList = ({ todos }) => (
  <>
    {todos.map(todo =><Todo key={todo.id}{...todo} />)}
  </>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired}).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
export default TodoList