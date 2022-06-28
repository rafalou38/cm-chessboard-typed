export class ChessboardViewAccessible extends ChessboardView {
    constructor(chessboard: any, callbackAfterCreation: any);
    lang: any;
    translations: {
        en: {
            colors: {
                w: string;
                b: string;
            };
            colors_long: {
                w: string;
                b: string;
            };
            pieces: {
                p: string;
                n: string;
                b: string;
                r: string;
                q: string;
                k: string;
            };
            pieces_long: {
                p: string;
                n: string;
                b: string;
                r: string;
                q: string;
                k: string;
            };
        };
        de: {
            colors: {
                w: string;
                b: string;
            };
            colors_long: {
                w: string;
                b: string;
            };
            pieces: {
                p: string;
                n: string;
                b: string;
                r: string;
                q: string;
                k: string;
            };
            pieces_long: {
                p: string;
                n: string;
                b: string;
                r: string;
                q: string;
                k: string;
            };
        };
    };
    t: any;
    th: any;
    movePieceFormContainer: ChildNode;
    form: any;
    inputFrom: any;
    inputTo: any;
    moveButton: any;
    boardAsTableContainer: ChildNode;
    boardAsTable: any;
    piecesListContainer: ChildNode;
    piecesList: any;
    updateFormInputs(): void;
    redrawPositionInAltAttribute(): void;
    redrawPiecesLists(): void;
    redrawBoardAsTable(): void;
    createElement(html: any): ChildNode;
}
import { ChessboardView } from "./ChessboardView.js";
//# sourceMappingURL=ChessboardViewAccessible.d.ts.map