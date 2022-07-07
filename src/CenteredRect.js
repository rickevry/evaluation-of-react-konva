import React from 'react';
import { Rect } from 'react-konva';

export function CenteredRect(props) {

    let _props = {
        ...props,
        x: props.x - props.width/2,
        y: props.y - props.height/2,
    }

    return (
        <Rect {..._props}  />
    );
}
