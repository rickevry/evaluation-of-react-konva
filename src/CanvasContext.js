import React from 'react';

let dragging = false;

let actions = {
    setPos: () => {},
    setCard: () => {},
    startDragging: (card) => {
        actions.setCard(card); 
        actions.setPos({x:100,y:100});
        dragging = true;
    },
    onPointerDown: (e) => {
        console.log("onPointerDown")
    },
    onPointerUp: (e) => {
        console.log("onPointerUp")
    },
    onPointerMove: (e) => {
        if (dragging) {
            actions.setPos({x:e.evt.clientX, y:e.evt.clientY});
        }
    },
    cancelDrag: (e) => {
        console.log("cancelDrag")
    },
}

const CanvasContext = React.createContext(actions);

export {
    CanvasContext, actions
}

