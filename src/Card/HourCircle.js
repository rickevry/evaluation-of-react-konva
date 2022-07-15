import React from 'react';
import { Theme } from '../Settings';
import { CenteredText } from '../Atoms/CenteredText';
import { CenteredRect } from '../Atoms/CenteredRect';

export function HourCircle(props) {

    return (
        <>
            <CenteredRect
                x={props.x }
                y={props.y }
                width={18}
                height={16}
                cornerRadius={6}
                radius={Theme.UserCircleRadius}
                fill={Theme.StoryPointsBackgroundColor}
            />
            <CenteredText
                x={props.x }
                y={props.y }
                fontSize={Theme.UserCircleFontSize}
                align="center"
                text={props.title} />
        </>
    );
}
