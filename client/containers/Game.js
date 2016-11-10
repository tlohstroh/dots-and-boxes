import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import setUpGames from '../actions/setup-games'
import setGameId from '../actions/set-current-game'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import saveGame from '../actions/update-game'
import Board from '../components/Board'

import './Game.sass'

const PLAYER_COLORS = ['#0f0', '#00f']

class Game extends Component {
  componentWillMount() {
    this.props.setGameId(this.props.routeParams.gameId)
    this.props.setUpGames()
  }

  isPlayer() {
    const { game, currentUser } = this.props
    return game.players.filter((player) =>
      player.userId === currentUser._id).length > 0
  }

  canJoin() {
    if (this.isPlayer()) { return false }
    const { game } = this.props
    return game.players.length < 4
  }

  joinGame() {
    const { game, saveGame, currentUser } = this.props
    saveGame(game, { players: game.players.concat({
      userId: currentUser._id,
      name: currentUser.name,
      color: PLAYER_COLORS[game.players.length],
    })})
  }

  render() {
    const { game } = this.props
    if (!!!game._id) { return null }

    if (this.canJoin()) {
      return (
        <Paper zDepth={3} className="join-game">
          <h3>Join this Game?</h3>
          <p>Join { game.players.map((player) => player.name).join(' and ') } in this game.</p>
          <RaisedButton label="Join" primary={true} onClick={ this.joinGame.bind(this) } />
          <Link to="/"><FlatButton label="Back to the Lobby" /></Link>
        </Paper>
      )
    }

    return(
      <div className="game">
        <p>Is player: { this.isPlayer() ? 'Yes' : 'No' }</p>
        <p>Can join: { this.canJoin() ? 'Yes' : 'No' }</p>
        { game.players.map((player) => player.name) }
        <div>
          <h1>Game Board here:</h1>
        </div>
        <Board />
      </div>
    )
  }
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    game: state.games.reduce((currentGame, nextGame) => {
      return nextGame._id === state.currentGame ? nextGame : currentGame
    }, {}),
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { setUpGames, setGameId, saveGame })(Game)
