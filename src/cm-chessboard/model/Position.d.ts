/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chessboard
 * License: MIT, see file 'LICENSE'
 */
export const FEN_START_POSITION: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
export const FEN_EMPTY_POSITION: "8/8/8/8/8/8/8/8";
export class Position {
    static squareToIndex(square: any): number;
    static indexToSquare(index: any): string;
    constructor(fen?: any);
    squares: any;
    setFen(fen?: string): void;
    getFen(): any;
    getPieces(sortBy?: string[]): {
        name: any;
        color: any;
        position: string;
    }[];
    movePiece(squareFrom: any, squareTo: any): void;
    setPiece(square: any, piece: any): void;
    getPiece(square: any): any;
    clone(): Position;
}
//# sourceMappingURL=Position.d.ts.map