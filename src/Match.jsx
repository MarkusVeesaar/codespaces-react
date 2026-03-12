import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <h1>Memory <span>Games</span></h1>
        <a href="Simon.html" className="button">Simon Says</a>
        <a href="MatchMatch.html" className="button">Match Match</a>
        <a href="Memory.html" className="button">A Memory Game</a>
      </nav>

      <div className="game-container">
        <h1>The games:</h1>

        <a href="Simon.html" className="button">Simon Says</a>
        <a href="MatchMatch.html" className="button">Match Match</a>
        <a href="Memory.html" className="button">A Memory Game</a>

        <img src="https://ita24veesaar.ita.voco.ee/photos/Screenshot%202026-02-16%20at%2011.21.14.png" alt="game1" />
        <img src="https://ita24veesaar.ita.voco.ee/photos/Screenshot%202026-02-16%20at%2011.21.32.png" alt="game2" />
        <img src="https://ita24veesaar.ita.voco.ee/photos/Screenshot%202026-02-16%20at%2011.21.44.png" alt="game3" />
      </div>

      <footer>
        <div>
          <p>© 2026 Memory Games. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
