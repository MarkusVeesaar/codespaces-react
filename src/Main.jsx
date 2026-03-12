import React, { useState } from 'react';
import './App.css';
import Memory from './Number';
import Match from './Match';
import Simon from './Simon';

function App() {
  const [currentGame, setCurrentGame] = useState("menu"); 

  const renderGame = () => {
    switch (currentGame) {
      case "memory":
        return <Memory onReturn={() => setCurrentGame("menu")} />;
      case "match":
        return <Match onReturn={() => setCurrentGame("menu")} />;
      case "simon":
        return <Simon onReturn={() => setCurrentGame("menu")} />;
      default:
        return (
          <div className="game-container">
            <h1>The games:</h1>

            <button className="button" onClick={() => setCurrentGame("simon")}>Simon Says</button>
            <button className="button" onClick={() => setCurrentGame("match")}>Match Match</button>
            <button className="button" onClick={() => setCurrentGame("memory")}>A Memory Game</button>

            <img src="https://ita24veesaar.ita.voco.ee/photos/Screenshot%202026-02-16%20at%2011.21.14.png" alt="game1" />
            <img src="https://ita24veesaar.ita.voco.ee/photos/Screenshot%202026-02-16%20at%2011.21.32.png" alt="game2" />
            <img src="https://ita24veesaar.ita.voco.ee/photos/Screenshot%202026-02-16%20at%2011.21.44.png" alt="game3" />
          </div>
        );
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>Memory <span>Games</span></h1>
        <button className="navbarbutton" onClick={() => setCurrentGame("simon")}>Simon Says</button>
        <button className="navbarbutton" onClick={() => setCurrentGame("match")}>Match Match</button>
        <button className="navbarbutton" onClick={() => setCurrentGame("memory")}>A Memory Game</button>
      </nav>

      {renderGame()}

      <footer>
        <div>
          <p>© 2026 Memory Games. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;