
export const fetchAllTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
}

export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
      todo: todo
    }
  });
}


