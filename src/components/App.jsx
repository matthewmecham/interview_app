import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Reverse from './Reverse';
import Length from './Length';

function App() {

  /** Hooks */
  const[isMouseDown, setMouseDown] = useState(false);
  const[reverseMode, setReverseMode] = useState(true);

  /** Event Handlers */
  function handleMouseDown() {
      setMouseDown(true);
  }

  function handleMouseUp() {
    setMouseDown(false);
    setReverseMode(!reverseMode);
  }

  return (
    <div>
      <Header />
      <div className="container">
        {reverseMode ? <Reverse /> : <Length />}
        <button
          style={{backgroundColor: isMouseDown ? "#f5ba13" : "white"}}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          Toggle
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App
