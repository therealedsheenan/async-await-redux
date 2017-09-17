
const initialState = {
  username: '',
  password: '',
  payload: []
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        username: action.username,
        password: action.password
      }
    case 'LOGIN_FAILED':
      return {
        ...state
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        username: action.username,
        password: action.password,
        payload: action.payload
      }
    default:
      return state
  }
}

export default login;