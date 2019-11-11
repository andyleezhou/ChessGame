import React from 'react';
import '../index.css';

export default function chessSquare(props) {
    return (
        <button className = {'square ' + props.shade}
        onClick = {props.onClick}
        style = {props.style}>
        </button>
    );
}