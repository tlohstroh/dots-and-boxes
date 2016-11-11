import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Board.sass'
import Edge from './Edge'
import Box from './Box'


class Board extends React.Component {

   render() {

     return(
       <div>
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <br></br>
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <br></br>
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <br></br>
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <br></br>
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <br></br>
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <Box type="box" />
         <Edge type="vertical" />
         <br></br>
         <Edge type="horizontal" />
         <Edge type="horizontal" />
         <Edge type="horizontal" />
       </div>



     )
   }
}





const mapStateToProps = (state) => {
 return {}
}

export default connect(mapStateToProps,{})(Board)
