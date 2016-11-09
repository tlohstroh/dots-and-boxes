import model from '../models/game-model'
import signOutUser from './sign-out-user'

export const GAME_SETUP = 'GAME_SETUP'

export default () => {
  return (dispatch) => {
    model.dispatch = dispatch
    model.app.authenticate()
      .then((response) => {
        model.find()
        dispatch(gameSetup())
      }).catch((error) => {
        console.error(error)
        dispatch(signOutUser())
      })
  }
}

export function gameSetup() {
  return {
    type: GAME_SETUP
  }
}
