import Pawn from '../Pieces/Pawn';
import Bishop from '../Pieces/Bishop';
import King from '../Pieces/King';
import Knight from '../Pieces/Knight';
import Queen from '../Pieces/Queen';
import Rook from '../Pieces/Rook';

export default function createBoard() {
    const squares = Array(64).fill(null);
    // const squares = [
    //     [1, 2, 1, 2, 1, 2, 1, 2]
    //     [2, 1, 2, 1, 2, 1, 2, 1]
    //     [1, 2, 1, 2, 1, 2, 1, 2]
    //     [2, 1, 2, 1, 2, 1, 2, 1]
    //     [1, 2, 1, 2, 1, 2, 1, 2]
    //     [2, 1, 2, 1, 2, 1, 2, 1]
    //     [1, 2, 1, 2, 1, 2, 1, 2]
    //     [2, 1, 2, 1, 2, 1, 2, 1]
    // ];

    // new class that takes ID (what title is gonna fit, black is 2, white is 1), take in gridx, gridY variable
    
    // for (let x = 0; x < squares.length; x++) {
    //     for (let y = 0; y < squares[x].length; y++) {
    //         if (squares[x][y] == 1) {
    //             new Pawn(1, x, y);
    //         }
    //         else {
    //             new Pawn(2, x, y);
    //         }
    //         squares[x][y] = new Pawn(2);
    //         squares[x][y] = new Pawn(1);
    //     }
    // }

    for(let i = 8; i < 16; i++){
        squares[i] = new Pawn(2);
        squares[i+40] = new Pawn(1);
      }

    squares[0] = new Rook(2);
    squares[7] = new Rook(2);
    squares[56] = new Rook(1);
    squares[63] = new Rook(1);

    squares[1] = new Knight(2);
    squares[6] = new Knight(2);
    squares[57] = new Knight(1);
    squares[62] = new Knight(1);

    squares[2] = new Bishop(2);
    squares[5] = new Bishop(2);
    squares[58] = new Bishop(1);
    squares[61] = new Bishop(1);

    squares[3] = new Queen(2);
    squares[59] = new Queen(1);

    squares[4] = new King(2);
    squares[60] = new King(1);

    return squares;
} 