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
    return game.players.length < 3
  }

  joinGame() {
    const { game, saveGame, currentUser } = this.props
    saveGame(game, { players: game.players.concat({
      userId: currentUser._id,
      name: currentUser.name,
      playerTurn: game.players.length,
      color: PLAYER_COLORS[game.players.length],
    })})
  }

  currentPlayer(){
    const { game, currentUser } = this.props
    const { players } = this.props.game
    // check if there actually are there are players...
    if( !!!players ) { return }
    // filter out the current player and return it
    return players.filter((player) => player.userId === currentUser._id)[0]
  }

  otherPlayer(){
    const { game, currentUser } = this.props
    const { players } = this.props.game
    // check if there actually are there are players...
    if( !!!players ) { return }
    // check if there are two players
    if( players.length < 2 ) { return }
    // filter out the other player and return it
    return players.filter((player) => player.userId != currentUser._id)[0]
  }

  notYouTurn(){
    const currentPlayer = this.currentPlayer()
    const otherPlayer = this.otherPlayer()
    const { turn } = this.props.game
    // check if there is another player
    if ( !otherPlayer ) { return false }
    // if turn is not playerTurn return true
    if (turn != currentPlayer.playerTurn) { return true }
  }

  gameNotOver(){
    const { players } = this.props.game
    const playerOneScore = players[0].boxes.length
    const playerTwoScore = players[1].boxes.length
    if (playerOneScore + playerTwoScore < 9){return true}
    return false
  }

  waitForOtherPlayer(){
    const otherPlayer = this.otherPlayer()
    // check if there is another player
    if ( !otherPlayer ) { return true }
  }

  render() {
    const { game } = this.props
    const { winner } = this.props.game
    const otherPlayer = this.otherPlayer()
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
    } // end if() return

    return(
      <div className="game">
        {/* <p>Is player: { this.isPlayer() ? 'Yes' : 'No' }</p>
        <p>Can join: { this.canJoin() ? 'Yes' : 'No' }</p> */}
        <div className="scoreboard">
          <div key="players">{ game.players.map((player) => <p className="score">{player.name}: SCORE = {player.boxes.length}</p>) }</div>
          <div>
            <h1 className="winner"> Winner: { winner }</h1>
          </div>
        </div>
        <Board />
        { (( this.notYouTurn.bind(this)() ) && this.gameNotOver.bind(this)() ) ?
          <div className="alert">
            <div>
              <h2>Be patient, it's not your turn! { otherPlayer.name } is still thinking... <br/> <br/>Or getting coffee...</h2>
            </div>
          </div>
          : null }
      </div> // end div className="game"
    ) // end return
  } // end render
} // end component

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
