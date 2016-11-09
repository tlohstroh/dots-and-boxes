import model from '../models/game-model'
import signOutUser from './sign-out-user'

export default (game, properties = {}, reset = false) => {
  return (dispatch) => {
    model.dispatch = dispatch
    model.app.authenticate()
      .then((response) => {
        model.save(game, properties, reset)
      }).catch((error) => {
        console.error(error)
        dispatch(signOutUser())
      })
  }
}
