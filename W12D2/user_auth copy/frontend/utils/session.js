
// signing up a user
export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user}
  })
}

// logging in a user
export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user}
  })
}

// logging out a user
export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
}