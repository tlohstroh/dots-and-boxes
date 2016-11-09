import api from '../middleware/api'
import appLoading from './loading'
import resetFormErrors from './reset-form-errors'
import setFormErrors from './set-form-errors'
import signInUser from './sign-in-user'

export const SIGN_UP_USER = 'SIGN_UP_USER'

export default (formData) => {
  return (dispatch) => {
    dispatch(signUpUser())
    dispatch(resetFormErrors())
    dispatch(appLoading(true))

    api.service('users').create(formData)
      .then((response) => {
        dispatch(signInUser(formData))
        dispatch(appLoading(false))
      })
      .catch((error) => {
        console.error('Error signing up: ', error)
        if (error.code === 409) {
          const emailError = {
            email: 'This email address already exists!'
          }
          dispatch(setFormErrors(emailError))
        }
        dispatch(appLoading(false))
      })
  }
}

const signUpUser = () => {
  return {
    type: SIGN_UP_USER
  }
}
