
import Piece from './Piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player, player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
            : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg");
    }
    isMovePossible(source, dest) {
        let mod = source % 8;
        let diff = 8 - mod;

        return (Math.abs(source - dest) % 8 === 0 || dest >= (source - mod) && dest < (source + diff));
    }
    getToDestination(source, dest) {
        let piecePath = [], pathStart, pathEnd, incrementCounter;

        if (source > dest) {
            pathStart = dest;
            pathEnd = source;
            
        } else {
            pathStart = source;
            pathEnd = dest;
        }
        if (Math.abs(source - dest) % 8 === 0) {
            incrementCounter = 8;
            pathStart += 8;
        } else {
            incrementCounter = 1;
            pathStart += 1;
        }
        for (let i = pathStart; i < pathEnd; i += incrementCounter) {
            piecePath.push(i);
        }
        return piecePath;
    }
}