import (TAKE_EDGE ) from '../actions/take-edge'

export default (state = false, { type } = {}) => {
  switch (type) {
    case TAKE_EDGE :
      return true

    default :
      return state

  }
}
