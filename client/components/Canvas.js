import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.rect(0,0, 100, 100);
        ctx.rect(100, 100, 100, 100);
        ctx.rect(200, 0, 100, 100);
        ctx.rect(0, 200, 100, 100);
        ctx.rect(200, 200, 100, 100);
        ctx.rect(0, 0, 300, 300);
        ctx.stroke();
    }
    render() {
        return (
            <canvas ref="canvas" width={600} height={600}/>
        );
    }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps,{})(CanvasComponent)
