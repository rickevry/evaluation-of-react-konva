import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Data } from './Data';
import { CanvasContext, actions } from './CanvasContext';
import { Board } from './Board/Board';
import { AnimationBoard } from './Animation/AnimationBoard';
import { HtmlToolbar } from './Html/HtmlToolbar';

const App = () => {
  const [card, setCard] = React.useState(null);
  const [counter, setCounter] = React.useState(1);

  useEffect(() => {
    actions.setCard = setCard;
  }, []);

  let data = Data;
  console.log("render");

  return (
    <CanvasContext.Provider value={"hejsan"}>
      <HtmlToolbar redraw={() => setCounter(counter+1)} />
      <Board data={data} card={card} />
      <AnimationBoard data={data} card={card} />
    </CanvasContext.Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
