import React from 'react';
import '../index.css';
import Square from '../Components/Square';

export default class FallenPieces extends React.Component {

  renderSquare(square) {
    return <Square 
    piece = {square} 
    style = {square.style}
    />
  }

  render() {
    return (
      <div>
      <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
        this.renderSquare(ws, index)
        )}</div>
      <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
        this.renderSquare(bs, index)
        )}</div>
      </div>
      );
  }
}