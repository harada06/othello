'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0],
    [2, 2, 1, 0, 0, 0, 0, 1],
    [2, 1, 1, 0, 1, 2, 1, 1],
    [1, 2, 2, 0, 2, 1, 1, 1],
    //1=>黒,2=>白
  ]);
  const [turnColor, setTurnColor] = useState(1);
  const newBoard = structuredClone(board);
  const clickHandler = (x: number, y: number) => {
    if (board[y][x] !== 0) return;

    for (let number = 2; number < 8; number++) {
      if (board[y + 1][x] === turnColor) return;
      //相手の石の列の先に自分の石があれば裏返す
      if (board[y + number] !== undefined && board[y + number][x] === turnColor) {
        //[y+number]が盤内かつ、自分の色であった場合
        for (let i = 1; i < number; i++) newBoard[y + i][x] = turnColor;
      }
      //[y+number]と[y]の間にある石を自色に変える
    }
    newBoard[y][x] = turnColor;
    setBoard(newBoard);
    setTurnColor(3 - turnColor);
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
