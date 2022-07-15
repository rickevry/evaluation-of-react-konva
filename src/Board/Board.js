import React, {useEffect} from 'react';
import { Stage, Layer, FastLayer } from 'react-konva';
import { Lanes } from './Lanes';
import { BackgroundArea } from './BackgroundArea';
import { DragCard } from '../Drag/DragCard';
import { SnapshotManager } from '../SnapshotManager';

export function Board(props) {

    return (<Stage width={window.innerWidth} height={window.innerHeight} ref={(r) => SnapshotManager.init(r)} >
    <Layer  >
      <BackgroundArea />
      <Lanes card={props.card} lanes={props.data} />
    </Layer>
    <FastLayer>
      <DragCard card={props.card} />
    </FastLayer>
  </Stage>);
}