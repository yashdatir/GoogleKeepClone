let nextTodoId = 0
export const addTodo = (text, note) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  note,
})
export const Del = (text) => ({  
  type: 'DEL',
  id: nextTodoId--,
  text,
})
export const toggleTodo = (text,note) => ({
  type: 'EDIT_TODO',
})