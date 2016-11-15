import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Board.sass'
import Box from './Box'


class Board extends React.Component {
   render() {
     var boxes = this.props.game.boxes
     return (
       <div className="board">
       { boxes.map((box) => {
         return <Box
         key={box.boxId}
         { ...box } />
       })}
       </div>
      )

   }
}





const mapStateToProps = (state) => {
 return {
   game: state.games.filter((game) => game._id === state.currentGame)[0],
 }
}

export default connect(mapStateToProps,{})(Board)
