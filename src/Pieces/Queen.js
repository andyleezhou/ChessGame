
import Piece from './Piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player, player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
            : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg");
    }

    isMovePossible(source, dest) {
        let mod = source % 8;
        let diff = 8 - mod;

        return (Math.abs(source - dest) % 9 === 0 || Math.abs(source - dest) % 8 === 0
            || Math.abs(source - dest) % 7 === 0 || dest >= (source - mod) && dest < (source + diff));
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
        if (Math.abs(source - dest) % 8 === 0) {
            incrementCounter = 8;
            pathStart += 8;
        }
        else if (Math.abs(source - dest) % 9 === 0) {
            incrementCounter = 9;
            pathStart += 9;
        }
        else if (Math.abs(source - dest) % 7 === 0) {
            incrementCounter = 7;
            pathStart += 7;
        } else {
            incrementCounter++;
            pathStart += 1;
        }
        for (let i = pathStart; i < pathEnd; i += incrementCounter) {
            piecePath.push(i);
        }
        return piecePath;
    }
}