import React, { useContext, useEffect } from 'react';
import { Rect, Group, Image } from 'react-konva';
import { Theme } from '../Settings';
import { CanvasContext } from '../CanvasContext';
import { SnapshotManager } from '../SnapshotManager';

export function AnimationCard(props) {

    // console.log("*id-" + props.card.id + " index-" + props.index + " y " + props.y);

    let [height, setHeight] = React.useState(Theme.CardHeight);

    let lineHeight = 1.4;

    // *props.lineHeight

    const actions = useContext(CanvasContext);

    if (!props.card) {
        return null;
    }

    let imageData = SnapshotManager.getImageData(props.card.id);
    if (!imageData) return null;

    console.log("image3", imageData);
    return (
        <Group
            onPointerDown={(e) => actions.startDragging(props.card) }
            onPointerUp={(e) => actions.setCard(null)}
            onPointerMove={(e) => actions.onPointerMove(e)}
        >
            <Image
                opacity={0.5}
                image={imageData.image}
                y={props.y}
                x={props.x}
                tran
                width={Theme.CardWidth}
                height={imageData.height}
                shadowColor='#172b4d'
                shadowBlur={0}
                shadowOffset={{ x: 0, y: 1 }}
                shadowOpacity={0.2}
            />

        </Group>
    );
}

// https://codesandbox.io/s/m37oww6r4j?file=/index.js:230-235

