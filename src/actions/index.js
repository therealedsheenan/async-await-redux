

const asyncThunkTest = () => {
  console.log('test1')
  return async (dispatch, getState) => {
    console.log('test2')
    dispatch({
      type: 'LOGIN_REQUEST',
      username: 'test',
      password: 'test'
    })

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await response.json()
      dispatch({
        type: 'LOGIN_SUCCESS',
        username: 'test',
        password: 'test',
        payload: json
      })
    } catch (e) {
      dispatch({
        type: 'LOGIN_FAILED',
        username: 'test',
        password: 'test'
      })
    }

    console.log('state: ', getState())
  }
}

export default asyncThunkTest