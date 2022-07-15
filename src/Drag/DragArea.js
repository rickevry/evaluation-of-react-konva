import React, { useContext, useEffect } from 'react';

import { Rect, Group } from 'react-konva';
import { Theme } from '../Settings';
import { CanvasContext } from '../CanvasContext';

export function DragArea(props) {
   
    let colors = ["red","green", "blue", "yellow", "pink"];
    const actions = useContext(CanvasContext);

    return (
        <Group
            onPointerDown={(e) => actions.startDragging(props.card) }
            onPointerUp={(e) => actions.setCard(null)}
            onPointerMove={(e) => actions.onPointerMove(e)}>
            <Rect
                y={props.y}
                x={props.x}
                width={Theme.CardWidth}
                height={props.height}
                opacity={0.2}
                fill={colors[props.index]}
            />
        </Group>
    );
}

// https://codesandbox.io/s/m37oww6r4j?file=/index.js:230-235

