export class ChessboardState {
    position: Position;
    orientation: any;
    markers: any[];
    inputWhiteEnabled: boolean;
    inputBlackEnabled: boolean;
    inputEnabled: boolean;
    squareSelectEnabled: boolean;
    setPosition(fen: any, animated?: boolean): void;
    movePiece(fromSquare: any, toSquare: any, animated?: boolean): void;
    _position: any;
    setPiece(square: any, piece: any, animated?: boolean): void;
    addMarker(square: any, type: any): void;
    removeMarkers(square?: any, type?: any): void;
}
import { Position } from "./Position.js";
//# sourceMappingURL=ChessboardState.d.ts.map