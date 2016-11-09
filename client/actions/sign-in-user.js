import api from '../middleware/api'
import setFormErrors from './set-form-errors'
import resetFormErrors from './reset-form-errors'
import appLoading from './loading'
import signOutUser from './sign-out-user'
import { history } from '../store'

export const SIGN_IN_USER = 'SIGN_IN_USER'

export default (formData = {}) => {
  return (dispatch) => {
    dispatch(resetFormErrors())
    dispatch(appLoading(true))

    api.authenticate(formData)
      .then((response) => {
        dispatch(signInUser(response.data))
        dispatch(appLoading(false))
        history.push('/')
      })
      .catch((error) => {
        console.error('Error authenticating: ', error)
        dispatch(setFormErrors({
          general: error.message
        }))
        dispatch(signOutUser())
        dispatch(appLoading(false))
      })
  }
}

const signInUser = (user) => {
  return {
    type: SIGN_IN_USER,
    payload: user
  }
}
