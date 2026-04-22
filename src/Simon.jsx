import './App.css';
import { useState, useEffect } from 'react';

function Simon() {
  const [sequence, setSequence] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [playerInput, setPlayerInput] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [litButton, setLitButton] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showDebug, setShowDebug] = useState(false); {/* debug */}

  const buttons = Array.from({ length: 16 }, (_, i) => i);

  const startGame = () => {
    const firstButton = Math.floor(Math.random() * 16);
    setSequence([firstButton]);
    setCurrentRound(1);
    setPlayerInput([]);
    setGameStarted(true);
    setGameOver(false);
    setTimeout(() => showSequence([firstButton]), 500);
  };

  const showSequence = (seq) => {
    setIsShowingSequence(true);
    seq.forEach((buttonIndex, index) => {
      setTimeout(() => {
        setLitButton(buttonIndex);
        setTimeout(() => setLitButton(null), 400);
      }, index * 600);
    });
    setTimeout(() => {
      setIsShowingSequence(false);
    }, seq.length * 600);
  };

  const handleButtonClick = (buttonIndex) => {
    if (isShowingSequence || !gameStarted || gameOver) return;

    const newInput = [...playerInput, buttonIndex];
    setPlayerInput(newInput);

    // Check if this click is correct
    if (newInput[newInput.length - 1] !== sequence[newInput.length - 1]) {
      setGameOver(true);
      setGameStarted(false);
      return;
    }

    // If sequence complete, go to next round
    if (newInput.length === sequence.length) {
      if (currentRound === 5) {
        // Game won
        setGameStarted(false);
        alert('Congratulations! You won!');
      } else {
        // Next round
        setTimeout(() => {
          nextRound();
        }, 1000);
      }
    }
  };

  const nextRound = () => {
    const newButton = Math.floor(Math.random() * 16);
    const newSequence = [...sequence, newButton];
    setSequence(newSequence);
    setCurrentRound(currentRound + 1);
    setPlayerInput([]);
    setTimeout(() => showSequence(newSequence), 500);
  };

  return (
    <>
      <div className="game-Simon">
        <h1>Simon Says</h1>
        <p>Round: {currentRound}/5</p>
        {gameOver && <p style={{color: 'red'}}>Game Over! Wrong button.</p>}
        {!gameStarted && !gameOver && <button onClick={startGame} className="start-button">Start Game</button>}
        {gameStarted && <button onClick={() => setShowDebug(!showDebug)} className="debug-button">Debug: {showDebug ? 'Hide' : 'Show'} Sequence</button>}
        {/* debug */}
        {showDebug && gameStarted && (
          <div className="debug-info">
            <p>Sequence: {sequence.join(' → ')}</p>
            <p>Next button to press: {sequence[playerInput.length] !== undefined ? sequence[playerInput.length] : 'None'}</p>
          </div>
        )}
        {/* debug */}

        <div className="button-grid">
          {buttons.map((index) => (
            <button
              key={index}
              className={`simon-button ${litButton === index ? 'lit' : ''}`}
              onClick={() => handleButtonClick(index)}
              disabled={isShowingSequence}
            ></button>
          ))}
        </div>

        <br />
        <br />

        <a href="/" className="Return">Return</a>
      </div>
    </>
  );
}

export default Simon;