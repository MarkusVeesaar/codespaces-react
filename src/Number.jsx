import { useState } from "react";
import './App.css';



function Memory() {

  const [number2, setnumber2] = useState("------");
  const [number, setnumber] = useState("------");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const GetNumber = () => {
    const correctNumber = Math.floor(100000 + Math.random() * 900000);
    setnumber(correctNumber);
    setnumber2(correctNumber);

    setTimeout(() => {
    setnumber("------");
    }, 3000);
  };


  const handleSubmit = () => {
    if (input === number2.toString()) {
      setResult("✅ Correct!");
      setTimeout(() => {
        setResult("------");}, 2000);
    } else {
      setResult(`❌ Wrong! Try again ${number2}.`);
      setnumber2("Get a new number");
      setTimeout(() => {
        setResult("------");}, 2000);
    }
  };

  return (
    <>

      <div className="game-Memory">
        <h1>Memory Game</h1>
        <p>Remember the number</p>
        <p>{number}</p>

        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />

        <button onClick={handleSubmit}>Submit</button>
        <br />
        <button onClick={GetNumber}>Get a new number</button>

        {result && <p>{result}</p>}

        <br />
        <br />

        <a href="Proto.html" className="Return">Return</a>
      </div>

    </>
  );
}

export default Memory;