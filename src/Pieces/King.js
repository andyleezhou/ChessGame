
import Piece from './Piece';

export default class King extends Piece {
    constructor(player) {
        super(player, player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
            : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg");
    }
    

    isMovePossible(source, dest) {
        return (source - 9 === dest ||
            source - 8 === dest ||
            source - 7 === dest ||
            source + 1 === dest ||
            source + 9 === dest ||
            source + 8 === dest ||
            source + 7 === dest ||
            source - 1 === dest);
    }

    getToDestination() {
        return [];
    }
   
}