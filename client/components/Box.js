import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './box.sass'
import './Edge.sass'
import Edge from './Edge'

class Box extends Component {
 render() {
   const { boxId } = this.props

   var edges = this.props.game.edges
   var edgeIds = this.props.boxEdges

   var boxEdges = edges.filter(edge => edgeIds.indexOf(edge.edgeId) !== -1)

   return(
     <div className="box">
     { boxEdges.map((edge) => {
       return <Edge
       key={edge.edgeId}
       { ...edge } />
     })}
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
