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

    let number = 1;
    while (number < 8) {
      number += 1;
      if (board[y + number] !== undefined && board[y + number][x] === 3 - turnColor) {
        continue;
      } //自分の色の石の下の石が異なる色=>次の条件式に飛ぶ
      //相手の石の列の先に自分の石があれば裏返す
      if (board[y + number] !== undefined && board[y + number][x] === turnColor) {
        //自分と同じ色の石にあたる=>その座標以下のy=y+iからyまでを裏返し続ける
        for (let i = 1; i < number; i++) newBoard[y + i][x] = turnColor;
      }
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);

      {
        break;
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
