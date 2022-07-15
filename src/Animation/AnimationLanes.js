import React from 'react';
import { Theme } from '../Settings';
import { AnimationLane } from './AnimationLane';

let getLaneX = (index) => {
    let start = Theme.LaneXpos + Theme.LaneLeftPadding + index*(Theme.LaneWidth+20);
    return start;
}

export function AnimationLanes(props) {
    console.log("!----------------------------");
    return (
        <>
        {props.lanes.map((lane, index) => (<AnimationLane card={props.card} title={lane.title} cards={lane.cards} x={getLaneX(index)} index={index} key={index} />))}
        </>
    );
}