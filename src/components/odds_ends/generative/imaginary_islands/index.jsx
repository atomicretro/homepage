import React, { Component } from 'react';
import { Noise } from 'noisejs';

class HTMLCanvas extends Component {
  shouldComponentUpdate() { return false; }

  render() {
    return (
      <canvas
        width={ this.props.dimensions.width }
        height={ this.props.dimensions.height }
        className='imaginary-islands-canvas'
        ref={ (node) => node ? this.props.contextRef(node.getContext('2d')) : null } />
    );
  }
}

class ReactCanvas extends Component {
  state = {
    dimensions: {
      height: 300,
      width: 300,
    },
    thresholdValue: 0.25,
    noise: [],
  };

  componentDidMount() {
    this.drawIslands();
  }

  componentDidUpdate() {
    this.drawIslands();
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  drawIslands = () => {
    const {
      thresholdValue,
      dimensions: {
        width,
        height,
      },
    } = this.state;
  
    const noise = new Noise(Math.random());
    for (let widthIdx = 0; widthIdx < width; widthIdx++) {
      for (let heightIdx = 0; heightIdx < height; heightIdx++) {
        let value = noise.simplex2(widthIdx / 100, heightIdx / 100);
        this.ctx.fillStyle = value > thresholdValue ? '#f1e9d6' : '#a7c9e8';
        this.ctx.fillRect(widthIdx, heightIdx, 1, 1);
      }
    }
  }

  handleRangeChange = (e) => {
    const { value } = e.target;
    this.setState({ thresholdValue: value });
  }

  render() {
    const { thresholdValue } = this.state;

    return (
      <>
        <HTMLCanvas dimensions={ this.state.dimensions } contextRef={ this.saveContext } />
        <input
          className='slider'
          id='myRange'
          min='-1'
          max='1'
          onChange={ this.handleRangeChange }
          step='0.01'
          type='range'
          value={ thresholdValue }
          />
      </>
    );
  }
}

export default ReactCanvas;
