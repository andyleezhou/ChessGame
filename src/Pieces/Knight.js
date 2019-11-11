
import Piece from './Piece';

export default class Knight extends Piece {
    constructor (player) {
        super(player, player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" 
        : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg");
    }
    isMovePossible(source, dest) {
        return (source - 17 === dest ||
            source - 15 === dest ||
            source + 17 === dest ||
            source + 15 === dest ||
            source + 10 === dest ||
            source + 6 === dest ||
            source - 6 === dest ||
            source - 10 === dest);
    }
    getToDestination() {
        return [];
    }
}