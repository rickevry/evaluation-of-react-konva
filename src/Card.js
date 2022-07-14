import React, { useContext, useEffect } from 'react';
import { Rect, Group, Text } from 'react-konva';
import { Theme } from './Settings';
import { CardFooter } from './CardFooter';
import { TagArea } from './TagArea';
import { CanvasContext } from './CanvasContext';
import { SnapshotManager } from './SnapshotManager';

export function Card(props) {

    // console.log("*id-" + props.card.id + " index-" + props.index + " y " + props.y);

    let [ref, setRef] = React.useState();
    let [height, setHeight] = React.useState(Theme.CardHeight);

    let lineHeight = 1.4;

    // *props.lineHeight

    useEffect(() => {
        if (ref) {
            let textLines = ref.textArr.length;
            let textHeight = (textLines + 1) * ref.textHeight * lineHeight;
            let fullHeight = textHeight + 40;

            if (props.setHeight) {
                props.setHeight(fullHeight)
            }
            setHeight(fullHeight);
        }
        if (props.done) {
            SnapshotManager.schedule(props.id, props.x, props.y, Theme.CardWidth, height)
        }
}, [ref, props.done])

    const actions = useContext(CanvasContext);

    if (!props.card) {
        return null;
    }

    return (
        <Group
            onPointerDown={(e) => actions.startDragging(props.card) }
            onPointerUp={(e) => actions.setCard(null)}
            onPointerMove={(e) => actions.onPointerMove(e)}
            // onDragStart={handleDragStart}
            // onDragEnd={handleDragEnd}
            // draggable
        >
            <Rect
                y={props.y}
                x={props.x}
                cornerRadius={Theme.CardRadius}
                width={Theme.CardWidth}
                height={height}
                fill={Theme.CardColor}
                shadowColor='#172b4d'
                shadowBlur={0}
                shadowOffset={{ x: 0, y: 1 }}
                shadowOpacity={0.2}

            />
            <Text
                ref={node => setRef(node)}
                y={props.y + Theme.CardPadding}
                x={props.x + Theme.CardPadding}
                fontSize={Theme.CardFontSize}
                lineHeight={lineHeight}
                wrap="word"
                align="left"
                width={Theme.CardWidth - (Theme.CardPadding * 2)}
                text={"A" + props.index + " " +  props.card.title} />

            <TagArea y={props.y + height - 60} x={props.x + Theme.CardPadding} />
            <CardFooter y={props.y + height - 40} x={props.x + Theme.CardPadding} />
        </Group>
    );
}

// https://codesandbox.io/s/m37oww6r4j?file=/index.js:230-235

