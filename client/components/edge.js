import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './edge.sass'
import onClick from '../reducers/onClick'

class Edge extends Component {
 render() {
   const { type } = this.props
   return (
     <div className={type}></div>
   )
 }
}

// onClick () {
//   render(){
//
//   return(
//
//   )
//   }
// }

const mapStateToProps = (state) => {
 return {}
}
//

export default Edge
