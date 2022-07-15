import React, { useContext, useEffect, useState } from 'react';
import { Circle } from 'react-konva';
import { Card } from '../Card/Card';
import { CanvasContext } from '../CanvasContext';

export function DragCard(props) {

    const actions = useContext(CanvasContext);

    // const [dragState, setDragState] = useState({});
    const [pos, setPos] = useState(null);
    // const [card, setCard] = useState(null);

    useEffect(() => {
        // actions.getDragging = () => { console.log("get dragging", dragState.dragging); return dragState.dragging };
        // actions.setDragging = (d) => { console.log("set dragging", d); setDragging(d)}; 
        actions.setPos = setPos; 
        // actions.setCard = setCard; 
    }, []);

    // console.log("Drag", pos, card);

    return (
    <Card
        y={pos ? pos.y : 0} 
        x={pos ? pos.x : 0} 
        card={props.card} 
        index={999} />);
}


