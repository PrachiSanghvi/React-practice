export const addToDo = (data) => {
  return {
    type : 'ADD_TODO',
    payload : {
      id:new Date().getTime().toString(),
      data:data
    }
  }
}

export const deleteToDo = (id) => {
  return {
    type : 'DELETE_TODO',
    id
  }
}

export const removeToDo = () => {
  return {
    type : 'REMOVE_TODO'
  }
}

// Saga practice actions

export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const getUsersFetch = () => ({
    type : GET_USERS_FETCH
})
