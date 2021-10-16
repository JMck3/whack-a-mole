// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState();

  const generateIndex = () => {
    setIndex(Math.floor(Math.random() * 6));
  };

  const startGame = () => {
    const timer = setInterval(generateIndex, 2000);
    setTimer(timer);
  };

  const endGame = () => {
    clearInterval(timer);
    setScore(0);
    setIndex(0);
  };

  const onClick = (n) => {
    if (index === n) {
      setScore((score) => score + 1);
    }
  };

  return (
    <div>
      <style>
        {`
        .hole {
          width: 50px;
          height: 50px;
          border: 1px solid black;
          border-radius: 50%;
        }

        .container {
          display: inline-block;
        }

        img {
          width: 50px;
          height: 50px;
        }
      `}
      </style>
      <button onClick={startGame}>start game</button>
      <button onClick={endGame}>end game</button>
      <p>score: {score}</p>
      <div>
        {Array(6)
          .fill()
          .map((_, n) => {
            if (index === n) {
              return (
                <div className="container">
                  <img
                    src="https://grid.gograph.com/happy-mole-cartoon-vector-art_gg68718247.jpg"
                    alt="mole"
                    onClick={() => onClick(n)}
                  />
                </div>
              );
            } else {
              return (
                <div className="container">
                  <div className="hole"></div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
