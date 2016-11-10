import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Board extends React.Component {

    render() {
      return(
        <h2>Testing..</h2>
      )
    }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps,{})(Board)
