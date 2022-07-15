import React from 'react';
import { Theme } from '../Settings';
import { HourCircle } from './HourCircle';
import { UserCircle } from './UserCircle';
import { CardId } from './CardId';

export function CardFooter(props) {

    let circleCoordinates = {
        x: props.x + Theme.CardWidth-30,
        y: props.y+20,
    }

    let hourCoordinates = {
        x: props.x + Theme.CardWidth-60,
        y: props.y+20,
    }

    let idCoordinates = {
        x: props.x+20,
        y: props.y+20,
    }

    return (
        <>
            <HourCircle {...hourCoordinates} title="40" />
            <UserCircle {...circleCoordinates} title="RN" />
            <CardId  {...idCoordinates} title="PR-130" />
        </>
    );
}

// https://codesandbox.io/s/m37oww6r4j?file=/index.js:230-235

