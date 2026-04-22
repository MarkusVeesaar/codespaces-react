import React from "react";
import './App.css';
import { useState } from "react";

const IMAGES = [
    "/Match_Photos/Css.png",
    "/Match_Photos/Rust.png",
    "/Match_Photos/Ruby.png",
    "/Match_Photos/Html.png",
    "/Match_Photos/Java.png",
    "/Match_Photos/C++.png",
    "/Match_Photos/React.png",
    "/Match_Photos/Python.png",
    "/Match_Photos/Php.png",
    "/Match_Photos/JavaScript.png"
  ];
 
// Two pairs of each image
const gameImages = [...IMAGES, ...IMAGES];
// shuffled Images
const shuffledImages = [...gameImages].sort(() => Math.random() - 0.5);
//count how many cards flipped
var flippedCount = 0;

//stats
var totalFlips = 0;

function Match() {

  //fliped Cards
  const [flippedCards, setFlippedIndices] = useState([]);
  //discovered Cards
  const [discoveredCards, setDiscoveredCards] = useState([]);


  //adding flipped cards if not already added
  const CardClick = (index) => {


    if (flippedCount == 2) {
      setFlippedIndices([]);
      if (shuffledImages[flippedCards[0]] === shuffledImages[flippedCards[1]]) {
      setDiscoveredCards([...discoveredCards, flippedCards[0], flippedCards[1]]);
    }
      flippedCount -= 2;
    }

    else if (!flippedCards.includes(index)) {
      setFlippedIndices([...flippedCards, index]);
        flippedCount++;
        totalFlips++;
    }

  }
  return (
    <>



      <div className="Game-match">
        <h1>Match Match</h1>
        <p>Select the Same cards</p>
        <div className="stats">
          <p>Flips: {totalFlips}</p>
          <p>Discovered: {discoveredCards.length / 2}</p>
        </div>
        <div className="Game-board">

          {shuffledImages.map((image, index) => (
            <button
              key={index}
              onClick={() => CardClick(index)}
            >
              {flippedCards.includes(index) || discoveredCards.includes(index) ? <img src={image} /> : "Turn"}
            </button>
          ))}
        </div>

        <br />
        <br />

        <a href="Proto.html" className="Return">Return</a>


      </div>

   </>
  );
}

export default Match;