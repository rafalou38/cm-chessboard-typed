export namespace MOVE_CANCELED_REASON {
    const secondClick: string;
    const movedOutOfBoard: string;
    const draggedBack: string;
    const clickedAnotherPiece: string;
}
export class VisualMoveInput {
    constructor(view: any, moveStartCallback: any, moveDoneCallback: any, moveCanceledCallback: any);
    view: any;
    chessboard: any;
    moveStartCallback: any;
    moveDoneCallback: any;
    moveCanceledCallback: any;
    setMoveInputState(newState: any, params?: any): void;
    moveInputState: any;
    pointerMoveListener: any;
    pointerUpListener: any;
    fromSquare: any;
    toSquare: any;
    movedPiece: any;
    startPoint: any;
    draggablePiece: Element;
    createDraggablePiece(pieceName: any): void;
    moveDraggablePiece(x: any, y: any): void;
    onPointerDown(e: any): void;
    onPointerMove(e: any): void;
    onPointerUp(e: any): void;
    updateStartEndMarkers(): void;
    reset(): void;
    destroy(): void;
}
//# sourceMappingURL=VisualMoveInput.d.ts.map