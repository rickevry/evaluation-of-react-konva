import React from 'react';
import { Rect} from 'react-konva';
import { Theme } from './Settings';

export function DragArea(props) {
   
    let colors = ["red","green", "blue", "yellow", "pink"];

    return (
            <Rect
                y={props.y}
                x={props.x}
                width={Theme.CardWidth}
                height={props.height}
                opacity={0.2}
                fill={colors[props.index]}
            />
    );
}

// https://codesandbox.io/s/m37oww6r4j?file=/index.js:230-235

