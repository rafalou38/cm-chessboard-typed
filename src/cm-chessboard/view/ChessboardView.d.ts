export function renderPieceTitle(lang: any, name: any, color?: any): any;
export namespace piecesTranslations {
    namespace en {
        namespace colors {
            const w: string;
            const b: string;
        }
        namespace colors_long {
            const w_1: string;
            export { w_1 as w };
            const b_1: string;
            export { b_1 as b };
        }
        namespace pieces {
            export const p: string;
            export const n: string;
            const b_2: string;
            export { b_2 as b };
            export const r: string;
            export const q: string;
            export const k: string;
        }
        namespace pieces_long {
            const p_1: string;
            export { p_1 as p };
            const n_1: string;
            export { n_1 as n };
            const b_3: string;
            export { b_3 as b };
            const r_1: string;
            export { r_1 as r };
            const q_1: string;
            export { q_1 as q };
            const k_1: string;
            export { k_1 as k };
        }
    }
    namespace de {
        export namespace colors_1 {
            const w_2: string;
            export { w_2 as w };
            const b_4: string;
            export { b_4 as b };
        }
        export { colors_1 as colors };
        export namespace colors_long_1 {
            const w_3: string;
            export { w_3 as w };
            const b_5: string;
            export { b_5 as b };
        }
        export { colors_long_1 as colors_long };
        export namespace pieces_1 {
            const p_2: string;
            export { p_2 as p };
            const n_2: string;
            export { n_2 as n };
            const b_6: string;
            export { b_6 as b };
            const r_2: string;
            export { r_2 as r };
            const q_2: string;
            export { q_2 as q };
            const k_2: string;
            export { k_2 as k };
        }
        export { pieces_1 as pieces };
        export namespace pieces_long_1 {
            const p_3: string;
            export { p_3 as p };
            const n_3: string;
            export { n_3 as n };
            const b_7: string;
            export { b_7 as b };
            const r_3: string;
            export { r_3 as r };
            const q_3: string;
            export { q_3 as q };
            const k_3: string;
            export { k_3 as k };
        }
        export { pieces_long_1 as pieces_long };
    }
}
export class ChessboardView {
    constructor(chessboard: any);
    chessboard: any;
    moveInput: VisualMoveInput;
    context: HTMLDivElement;
    resizeObserver: ResizeObserver;
    resizeListener: any;
    pointerDownListener: any;
    pointerDownHandler(e: any): void;
    destroy(): void;
    animationQueue: any[];
    cacheSprite(): void;
    createSvgAndGroups(): void;
    svg: Element;
    boardGroup: Element;
    coordinatesGroup: Element;
    markersGroup: Element;
    piecesGroup: Element;
    updateMetrics(): void;
    width: number;
    height: number;
    borderSize: number;
    innerWidth: number;
    innerHeight: number;
    squareWidth: number;
    squareHeight: number;
    scalingX: number;
    scalingY: number;
    pieceXTranslate: number;
    handleResize(): void;
    redraw(): void;
    drawBoard(): void;
    drawCoordinates(): void;
    redrawPieces(squares?: any): void;
    drawPiece(square: any, pieceName: any): Element;
    setPieceVisibility(square: any, visible?: boolean): void;
    getPieceElement(square: any): Element;
    drawMarkers(): void;
    drawMarker(marker: any): Element;
    enableMoveInput(eventHandler: any, color?: any): void;
    moveInputCallback: any;
    disableMoveInput(): void;
    moveStartCallback(square: any): any;
    moveDoneCallback(squareFrom: any, squareTo: any): any;
    moveCanceledCallback(reason: any, squareFrom: any, squareTo: any): void;
    visualizeInputState(): void;
    indexToPoint(index: any): {
        x: number;
        y: number;
    };
    squareToPoint(square: any): {
        x: number;
        y: number;
    };
}
export class Svg {
    /**
     * create the Svg in the HTML DOM
     * @param containerElement
     * @returns {Element}
     */
    static createSvg(containerElement?: any): Element;
    /**
     * Add an Element to a SVG DOM
     * @param parent
     * @param name
     * @param attributes
     * @returns {Element}
     */
    static addElement(parent: any, name: any, attributes: any): Element;
    /**
     * Remove an Element from a SVG DOM
     * @param element
     */
    static removeElement(element: any): void;
}
import { VisualMoveInput } from "./VisualMoveInput.js";
//# sourceMappingURL=ChessboardView.d.ts.map