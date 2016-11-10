import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Board.sass'

class Board extends React.Component {

    render() {

      return(
        <div className="board">
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <br></br>
          <div className="vertical"></div>
          <div className="box" id="box-1"></div>
          <div className="vertical"></div>
          <div className="box" id="box-2"></div>
          <div className="vertical"></div>
          <div className="box" id="box-3"></div>
          <div className="vertical"></div>
          <br></br>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <br></br>
          <div className="vertical"></div>
          <div className="box" id="box-4"></div>
          <div className="vertical"></div>
          <div className="box" id="box-5"></div>
          <div className="vertical"></div>
          <div className="box" id="box-6"></div>
          <div className="vertical"></div>
          <br></br>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <br></br>
          <div className="vertical"></div>
          <div className="box" id="box-7"></div>
          <div className="vertical"></div>
          <div className="box" id="box-8"></div>
          <div className="vertical"></div>
          <div className="box" id="box-9"></div>
          <div className="vertical"></div>
          <br></br>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
          <div className="horizontal"></div>
        </div>
      )
    }
}




const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps,{})(Board)
