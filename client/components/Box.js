import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './box.sass'

class Box extends Component {
 render() {
   const { type } = this.props
   return (
     <div className={type}></div>
   )
 }
}


const mapStateToProps = (state) => {
 return {}
}
//

export default Box
