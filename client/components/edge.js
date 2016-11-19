import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Edge.sass'
import saveGame from '../actions/update-game'

export class Edge extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    edgeId: PropTypes.string.isRequired,
    taken: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }

  takeEdge(){
    const { game, edgeId, saveGame, currentUser, playerTurn} = this.props
    const players = game.players
    const player = players.filter((player) => player.userId === currentUser._id)
    if(players.length < 2){ alert("Please wait for another player") }
    else{
      console.log("I want this edge")
      if(player[0].playerTurn !== game.turn){
          // alert("Not your turn!")
          return
        }
      else{
        const newEdges = game.edges.map((edge) => {
          if (edge.edgeId === edgeId) {
            // console.log(edge);
            return Object.assign({}, edge, { taken: true })
          }

          return edge
        })
        saveGame(game, {takenEdgesIds: game.takenEdgesIds.push(edgeId)})
        console.log("TAKEN EDGES: " + game.takenEdgesIds);
        saveGame(game, { edges: newEdges })
      }
    }
  }


 render() {
  //  console.log(this.props)
   const { taken, type } = this.props

   const classNames = [
     type,
     taken ? 'taken' : 'free'
   ]

   return (
     <div className={ classNames.join(' ') } onClick={ this.takeEdge.bind(this) } />
   )
 }
}

const mapStateToProps = ({ games, currentGame, currentUser }, { edgeId }) => {
  const game = games.filter((game) => game._id === currentGame)[0]
  const edge = game.edges.filter((edge) => edge.edgeId === edgeId)

  return {
    game,
    currentUser,
    ...edge
  }
}

export default connect(mapStateToProps, {saveGame})(Edge)
