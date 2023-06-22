import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);

  const handleMoveUp = () => {
    if (topPosition > 0) {
      setTopPosition((prevTop) => prevTop - 10);
    }
  };

  const handleMoveDown = () => {
    if (topPosition < 450) {
      setTopPosition((prevTop) => prevTop + 10);
    }
  };

  const handleMoveRight = () => {
    if (leftPosition < 450) {
      setLeftPosition((prevLeft) => prevLeft + 10);
    }
  };

  const handleMoveLeft = () => {
    if (leftPosition > 0) {
      setLeftPosition((prevLeft) => prevLeft - 10);
    }
  };

  const handleStop = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="main_container">
      <button className="horizontal" onClick={handleMoveUp}>
        Up by CHIRAG GARG 
      </button>
      <div className="container">
        <button className="vertical" onClick={handleMoveLeft}>
          Left by CHIRAG GARG
        </button>
        <div className="main">
          <div
            className="box"
            style={{ top: `${topPosition}px`, left: `${leftPosition}px` }}
            onClick={handleStop}
          />
        </div>
        <button className="vertical" onClick={handleMoveRight}>
          Right by CHIRAG GARG
        </button>
      </div>
      <button className="horizontal" onClick={handleMoveDown}>
        Bottom by CHIRAG GARG
      </button>
    </div>
  );
};

export default App;

