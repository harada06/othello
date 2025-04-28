'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 0, 1, 2, 1, 1],
    [1, 0, 0, 0, 2, 1, 1, 1],
    //1=>黒,2=>白
  ]);
  const [turnColor, setTurnColor] = useState(1);
  const newBoard = structuredClone(board);
  const clickHandler = (x: number, y: number) => {
    if (board[y][x] !== 0) return;

    let number = 1;
    while (number < 8) {
      number += 1;
      if (board[y + number] !== undefined && board[y + number][x] === 3 - turnColor) {
        newBoard[y][x] = turnColor;
        newBoard[y + number][x] = turnColor;
        setTurnColor(3 - turnColor);
      } else {
        if (board[y + number] !== undefined && board[y + number][x] === turnColor) {
          break;
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {board[y][x] !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#FFF' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
