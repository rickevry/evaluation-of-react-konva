import React from 'react';
import { Rect, Text } from 'react-konva';
import { Theme } from './Settings';
import { Card } from './Card';
import { DragArea } from './DragArea';

export function Lane(props) {
 
    if (props.index === 0) {
        console.log("!***************************************");
    }

    let getCardX = () => {
        let start = props.x + Theme.LaneLeftPadding;
        return start;
    }

    let [heightInfo, setHeightInfo] = React.useState({
        counter: 0,
        array: Array(props.cards.length)
    });
 
    let setHeight = (index, height, id) => {
        console.log("*setHeight", index, height, id);
        heightInfo.array[index] = height;
        heightInfo.counter++;
        console.log("*" + id, index, JSON.stringify(heightInfo.array));
        if (heightInfo.array.length === heightInfo.counter) {
            setHeightInfo({...heightInfo});
        }
    }

    let getHeight = (index) => {
        if (heightInfo.array[index]) {
            return heightInfo.array[index];
        }; 
        return 0;
    }
    
    let getGhostHeight = (index) => {
        let result = 0;
        if (index<0) {
            // return 0;
        } else {
            let height1 = getHeight(index-1); 
            let height2 = getHeight(index); 
            console.log("!height1 and 2:", height1, height2);
            result = (height1 + height2) / 2;
        }
        console.log("!getGhostHeight", result);
        return result;
    }

    let getGhostY = (index) => {
        let result = 0;
        let y = getCardY(index-1);
        let height = getHeight(index-1);
        result = y + height/2;
        console.log("!getGhostY", result);
        return result;
    }


    let getCardY = (index) => {
        let top = Theme.LaneYpos + Theme.LaneTopPadding;
        if (index<0) return top;
        if (heightInfo.array.length === heightInfo.counter) {
            let start = heightInfo.array.reduce((acc, curr, _index) => {
                if (_index<index) {
                    return acc + curr + Theme.CardGap;    
                }
                return acc;
            }, top);
            return start;

        } else {
            let start = top + index*(Theme.CardHeight+Theme.CardGap);
            return start;
        }
    }
    
let renderDragArea = () => {
    if (!props.card) {
        return null;
    }
    return (
    <>
        {props.cards.map((card, index) => (<DragArea height={getGhostHeight(index)} y={getGhostY(index)} x={getCardX()} index={index}  key={index}  />))}
        <DragArea height={getGhostHeight(props.cards.length)} y={getGhostY(props.cards.length)} x={getCardX()} index={props.cards.length} key={props.cards.length} />        
    </>)
}

    return (
        <>
        <Rect cornerRadius={Theme.LaneRadius} x={props.x} width={Theme.LaneWidth} y={Theme.LaneYpos} height={800} fill={Theme.LaneColor} />
        <Text text={props.title} x={props.x+10} y={Theme.LaneYpos+10} fontSize={Theme.LaneTitleFontSize} />
        {props.cards.map((card, index) => (<Card setHeight={(height) => setHeight(index, height, card.id)} y={getCardY(index)} x={getCardX()} key={index} card={card} index={index} />))}
        {renderDragArea()}
        </>
    );
}

