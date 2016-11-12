import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './edge.sass'
import onClick from '../reducers/onClick'

class Edge extends Component {
 render() {
   const { edgeId, taken } = this.props


   return (
     <div>
       {/* TODO: Render  */}
     </div>
   )
 }
}



Edge.propTypes = {
  edgeId: PropTypes.string.isRequired,
  // taken: PropTypes.boolean.isRequired,
  // type: PropTypes.string.isRequired,
}

export default Edge
