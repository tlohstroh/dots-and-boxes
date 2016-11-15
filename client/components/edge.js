import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Edge.sass'
import saveGame from '../actions/update-game'
import takeEdge from '../actions/take-edge'

export class Edge extends Component {

  takeEdge(){
    // const edge = this
    //var edges = this.props.game.edges
    const { edgeId, taken, type } = this.props
    console.log("I want this edge")
    saveGame()
    console.log("I took this edge")

  }

 render() {
   const { edgeId, taken, type } = this.props

   return (
     <div className={ type } onClick={ this.takeEdge.bind(this) }>
     </div>
   )
 }
}



Edge.propTypes = {
  edgeId: PropTypes.string.isRequired,
  // taken: PropTypes.boolean.isRequired,
  // type: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
 return {
    game: state.games.filter((game) => game._id === state.currentGame)[0]
 }
}

export default connect(null, {saveGame})(Edge)
