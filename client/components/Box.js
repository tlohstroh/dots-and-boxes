import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './box.sass'
import './Edge.sass'
import Edge from './Edge'

class Box extends Component {
 render() {
   const { boxId, boxOwner } = this.props


   var edges = this.props.game.edges
   var edgeIds = this.props.boxEdges

   var boxEdges = edges.filter(edge => edgeIds.indexOf(edge.edgeId) !== -1)

   const classNames = [
     'box',
     boxOwner === 1 ? 'player1' : boxOwner === 0 ? 'player2' : 'nobody'
   ]

   return(

       <div className={ classNames.join(' ') }>
       { boxEdges.map((edge) => {
         return <Edge
         key={edge.edgeId}
         { ...edge } />
       })}
       <p className="dot1 dot"></p>
       <p className="dot2 dot"></p>
       <p className="dot3 dot"></p>
       <p className="dot4 dot"></p>
       </div>

   )
 }
 }



Box.propTypes = {
  boxId: PropTypes.string.isRequired,
  // taken: PropTypes.boolean.isRequired,
  // type: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
 return {
    game: state.games.filter((game) => game._id === state.currentGame)[0]
 }
}

export default connect(mapStateToProps,{})(Box)
// export default Box
