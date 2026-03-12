import { useState } from "react";
import './App.css';

function Memory() {
  const correctNumber = Math.floor(100000 + Math.random() * 900000);

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (input === correctNumber) {
      setResult("✅ Correct!");
    } else {
      setResult("❌ Wrong! Try again.");
    }
  };

  return (
    <>

      <div className="game-Memory">
        <h1>Memory Game</h1>
        <p>Remember the number</p>
        <p>{correctNumber}</p>

        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />

        <button onClick={handleSubmit}>Submit</button>

        {result && <p>{result}</p>}

        <br />
        <br />

        <a href="Proto.html" className="Return">Return</a>
      </div>

    </>
  );
}

export default Memory;