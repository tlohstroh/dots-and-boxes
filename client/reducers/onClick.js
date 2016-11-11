import { ONCLICK } from "../actions/onclick"

export default (state = false, {type } = {}) => {
  switch(type){
    case 'ONCLICK' :
      return false

      default :
      return state
    }
  }
