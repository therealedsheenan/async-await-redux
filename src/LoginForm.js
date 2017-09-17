import React from 'react'
import { Field, reduxForm } from 'redux-form'


let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="userName">Username: </label>
        <Field name="userName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;