
import Piece from './Piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
            : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg");
    }
    isMovePossible(source, dest) {
        return (Math.abs(source - dest) % 9 === 0 || Math.abs(source - dest) % 7 === 0);
    }

    getToDestination(source, dest) {
        let piecePath = [], pathStart, pathEnd, incrementCounter;
        if (source > dest) {
            pathStart = dest;
            pathEnd = source;
        }
        else {
            pathStart = source;
            pathEnd = dest;
        }
        if (Math.abs(source - dest) % 9 === 0) {
            incrementCounter = 9;
            pathStart += 9;
        } 
        else {
            incrementCounter = 7;
            pathStart += 7;
        }
        for (let i = pathStart; i < pathEnd; i += incrementCounter) {
            piecePath.push(i);
        }
        return piecePath;
    }
}