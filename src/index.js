import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Data } from './Data';
import { CanvasContext, actions } from './CanvasContext';
import { Board } from './Board';
import { AnimationBoard } from './AnimationBoard';

const INITIAL_STATE = []; // generateShapes();

const App = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const [card, setCard] = React.useState(null);

  useEffect(() => {
    actions.setCard = setCard;
  }, []);

  let data = Data;
  console.log("render");

  return (
    <CanvasContext.Provider value={"hejsan"}>
      <Board data={data} card={card} />
      <AnimationBoard data={data} card={card} />
    </CanvasContext.Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
