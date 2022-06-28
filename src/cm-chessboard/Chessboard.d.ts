export namespace COLOR {
    const white: string;
    const black: string;
}
export namespace INPUT_EVENT_TYPE {
    const moveStart: string;
    const moveDone: string;
    const moveCanceled: string;
}
export namespace SQUARE_SELECT_TYPE {
    const primary: string;
    const secondary: string;
}
export namespace BORDER_TYPE {
    const none: string;
    const thin: string;
    const frame: string;
}
export namespace MARKER_TYPE {
    export namespace frame_1 {
        const _class: string;
        export { _class as class };
        export const slice: string;
    }
    export { frame_1 as frame };
    export namespace square {
        const _class_1: string;
        export { _class_1 as class };
        const slice_1: string;
        export { slice_1 as slice };
    }
    export namespace dot {
        const _class_2: string;
        export { _class_2 as class };
        const slice_2: string;
        export { slice_2 as slice };
    }
    export namespace circle {
        const _class_3: string;
        export { _class_3 as class };
        const slice_3: string;
        export { slice_3 as slice };
    }
}
export namespace PIECE {
    const wp: string;
    const wb: string;
    const wn: string;
    const wr: string;
    const wq: string;
    const wk: string;
    const bp: string;
    const bb: string;
    const bn: string;
    const br: string;
    const bq: string;
    const bk: string;
}
export class Chessboard {
    constructor(context: any, props?: {});
    context: any;
    id: string;
    props: {};
    state: ChessboardState;
    view: ChessboardViewAccessible;
    positionAnimationsQueue: PositionAnimationsQueue;
    setPiece(square: any, piece: any, animated?: boolean): Promise<any>;
    movePiece(squareFrom: any, squareTo: any, animated?: boolean): Promise<any>;
    setPosition(fen: any, animated?: boolean): Promise<any>;
    setOrientation(color: any, animated?: boolean): Promise<void>;
    boardTurning: boolean;
    getPiece(square: any): any;
    getPosition(): any;
    getOrientation(): any;
    addMarker(square: any, type: any): void;
    getMarkers(square?: any, type?: any): any[];
    removeMarkers(square?: any, type?: any): void;
    destroy(): void;
    enableMoveInput(eventHandler: any, color?: any): void;
    disableMoveInput(): void;
    enableSquareSelect(eventHandler: any): void;
    squareSelectListener: (e: any) => void;
    disableSquareSelect(): void;
}
import { ChessboardState } from "./model/ChessboardState.js";
import { ChessboardViewAccessible } from "./view/ChessboardViewAccessible.js";
import { PositionAnimationsQueue } from "./view/PositionAnimationsQueue.js";
//# sourceMappingURL=Chessboard.d.ts.map