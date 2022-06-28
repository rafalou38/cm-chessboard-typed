export class PromiseQueue {
    queue: any[];
    workingOnPromise: boolean;
    stop: boolean;
    enqueue(promise: any): Promise<any>;
    dequeue(): boolean;
    destroy(): void;
}
export class PositionsAnimation {
    static seekChanges(fromSquares: any, toSquares: any): any[];
    static squareDistance(index1: any, index2: any): number;
    constructor(view: any, fromPosition: any, toPosition: any, duration: any, callback: any);
    view: any;
    animatedElements: any[];
    duration: any;
    callback: any;
    frameHandle: number;
    createAnimation(fromSquares: any, toSquares: any): any[];
    animationStep(time: any): void;
    startTime: any;
}
export class PositionAnimationsQueue extends PromiseQueue {
    constructor(chessboard: any);
    chessboard: any;
    enqueuePositionChange(positionFrom: any, positionTo: any, animated: any): Promise<any>;
    enqueueTurnBoard(position: any, color: any, animated: any): Promise<any>;
}
//# sourceMappingURL=PositionAnimationsQueue.d.ts.map