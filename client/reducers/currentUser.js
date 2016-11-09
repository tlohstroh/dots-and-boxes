import { SIGN_IN_USER } from '../actions/sign-in-user'
import { SIGN_OUT_USER } from '../actions/sign-out-user'

export default (state = JSON.parse(localStorage.getItem('mg.currentUser')) || {}, { type, payload } = {}) => {
  switch(type) {
    case SIGN_IN_USER :
      localStorage.setItem('mg.currentUser', JSON.stringify(payload))
      return payload

    case SIGN_OUT_USER :
      localStorage.removeItem('mg.currentUser')
      return {}

    default :
      return state
  }
}
