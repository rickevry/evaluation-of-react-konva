import React from 'react';
import {  Circle } from 'react-konva';
import { Theme } from './Settings';
import { CenteredText } from './CenteredText';

export function UserCircle(props) {

    return (
        <>
            <Circle
                x={props.x}
                y={props.y}
                radius={Theme.UserCircleRadius}
                fill={Theme.UserCircleColor}
            />
            <CenteredText
                x={props.x}
                y={props.y}
                fontSize={Theme.UserCircleFontSize}
                align="center"
                text={props.title} />
        </>
    );
}
