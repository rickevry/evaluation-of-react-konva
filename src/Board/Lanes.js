import React from 'react';
import { Theme } from '../Settings';
import { Lane } from './Lane';

let getLaneX = (index) => {
    let start = Theme.LaneXpos + Theme.LaneLeftPadding + index*(Theme.LaneWidth+20);
    return start;
}

export function Lanes(props) {
    console.log("!----------------------------");
    return (
        <>
        {props.lanes.map((lane, index) => (<Lane card={props.card} title={lane.title} cards={lane.cards} x={getLaneX(index)} index={index} key={index} />))}
        </>
    );
}