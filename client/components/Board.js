import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Board.sass'
import Edge from './Edge'
import Box from './Box'


class Board extends React.Component {
   render() {
     var edges = this.props.game.edges

     return (
       <div>
       <Box type="box">
         { edges.map((edge) => {
           return <Edge
           key={edge.edgeId}
           { ...edge } />
         })}
       </Box>
       </div>
      )
    //    <div>
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <br></br>
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <br></br>
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <br></br>
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <br></br>
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <br></br>
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <Box type="box" />
    //      <Edge type="vertical" />
    //      <br></br>
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //      <Edge type="horizontal" />
    //    </div>
    //  )
   }
}





const mapStateToProps = (state) => {
  debugger
 return {
   game: state.games.filter((game) => game._id === state.currentGame)[0],
 }
}

export default connect(mapStateToProps,{})(Board)
