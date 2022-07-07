import React, { useContext } from 'react';
import { Rect } from 'react-konva';
import { CanvasContext } from './CanvasContext';

export function BackgroundArea(props) {

    const actions = useContext(CanvasContext);

    return (
            <Rect
                onPointerUp={(e) => actions.cancelDrag(e)}
                onPointerMove={(e) => actions.onPointerMove(e)}
                x={0}
                y={0}
                width={1000}
                height={1000}
                fill={"pink"}
            />
    );
}
