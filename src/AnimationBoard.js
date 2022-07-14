import React, {useEffect} from 'react';
import { Stage, Layer, FastLayer } from 'react-konva';
import { AnimationLanes } from './AnimationLanes';
import { BackgroundArea } from './BackgroundArea';
import { DragCard } from './DragCard';
import { SnapshotManager } from './SnapshotManager';

export function AnimationBoard(props) {

    return (<Stage width={window.innerWidth} height={window.innerHeight} >
    <Layer  >
      <BackgroundArea />
      <AnimationLanes card={props.card} lanes={props.data} />
    </Layer>
  </Stage>);
}


{/* <FastLayer>
<DragCard card={props.card} />
</FastLayer>
 */}
