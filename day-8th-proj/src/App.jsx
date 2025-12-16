// import { useState } from 'react'
// import './App.css'

// function value() {
//   let [val, setVal] = useState('X')
//   return { val, setVal }
// }

// export default function App() {
//   return (
//     <>
//       <h1>TIC-TAC-TOE</h1>

//       {/* 3x3 tic-tac-toe grid */}
//       <div className="board">
//         <div className="row">
//           <div className="cell"><button onClick={setVal{val}}>{val}</button></div>
//           <div className="cell"></div>
//           <div className="cell"></div>
//         </div>

//         <div className="row">
//           <div className="cell"></div>
//           <div className="cell"></div>
//           <div className="cell"></div>
//         </div>

//         <div className="row">
//           <div className="cell"></div>
//           <div className="cell"></div>
//           <div className="cell"></div>
//         </div>
//       </div>
//     </>
//   )
// }


import { useState } from "react";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  function handleClick(index) {
    // Prevent overwriting a filled cell
    if (board[index] !== null) return;
    setPlayer(player === "X" ? "O" : "X");

    const newBoard = [...board];
    
    newBoard[index] = player;

    setBoard(newBoard);
  }

  return (
    <>
      <h1>TIC-TAC-TOE</h1>

      <div className="board">
        {board.map((value, index) => (
          <div className="cell" key={index} onClick={() => handleClick(index)}>
            {value}
          </div>
        ))}
      </div>
    </>
  );
}
