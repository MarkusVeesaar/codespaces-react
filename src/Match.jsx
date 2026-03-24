import React from "react";
import './App.css';
import { useState } from "react";


function Match() {

  const [clicked, setClicked] = useState(true);

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

  // Create pairs for matching game (each image appears twice)
  const gameImages = [...IMAGES, ...IMAGES];

  // Shuffle the images
  const shuffledImages = [...gameImages].sort(() => Math.random() - 0.5);

  return (
    <>



      <div className="Game-match">
        <h1>Match Match</h1>
        <p>Select the Same cards</p>

        <div>
          {shuffledImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setClicked(false)}
            >
              {clicked ? <img src={image} /> : "Flip"}
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