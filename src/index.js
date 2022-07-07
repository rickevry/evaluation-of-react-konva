import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Star, FastLayer } from 'react-konva';
import { Lanes } from './Lanes';
import { Data } from './Data';
import { BackgroundArea } from './BackgroundArea';
import { CanvasContext, actions } from './CanvasContext';
import { DragCard } from './DragCard';

function generateShapes() {
  return [...Array(3)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = []; // generateShapes();

const App = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const [card, setCard] = React.useState(null);

  useEffect(() => {
    actions.setCard = setCard; 
  }, []);


  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  let data = Data;
 console.log("render");

  return (
    <CanvasContext.Provider value={"hejsan"}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer  >
          <BackgroundArea />
          <Lanes card={card} lanes={data} />
          {stars.map((star) => (
            <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            />
            ))}
        </Layer>
        <FastLayer>
          <DragCard card={card} />
        </FastLayer>
      </Stage>
    </CanvasContext.Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
