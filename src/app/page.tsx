'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    //1=>黒,2=>白
  ]);
  const [turnColor, setTurnColor] = useState(1);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    //↓↓↓
    /*上 */
    //二個上が自分と同じ色
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      board[y - 2][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //三個上が自分と同じ色
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      board[y - 2][x] === 3 - turnColor &&
      board[y - 3][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //四個上が自分と同じ色
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      board[y - 2][x] === 3 - turnColor &&
      board[y - 3][x] === 3 - turnColor &&
      board[y - 4][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //五個上が自分と同じ色
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      board[y - 2][x] === 3 - turnColor &&
      board[y - 3][x] === 3 - turnColor &&
      board[y - 4][x] === 3 - turnColor &&
      board[y - 5][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //六個上が自分と同じ色
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      board[y - 2][x] === 3 - turnColor &&
      board[y - 3][x] === 3 - turnColor &&
      board[y - 4][x] === 3 - turnColor &&
      board[y - 5][x] === 3 - turnColor &&
      board[y - 6][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      newBoard[y - 5][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //七個上が自分と同じ色
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      board[y - 2][x] === 3 - turnColor &&
      board[y - 3][x] === 3 - turnColor &&
      board[y - 4][x] === 3 - turnColor &&
      board[y - 5][x] === 3 - turnColor &&
      board[y - 6][x] === 3 - turnColor &&
      board[y - 7][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      newBoard[y - 5][x] = turnColor;
      newBoard[y - 6][x] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*下 */
    //二個下が自分と同じ色
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      board[y + 2][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //三個下が自分と同じ色
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      board[y + 2][x] === 3 - turnColor &&
      board[y + 3][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //四個下が自分と同じ色
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      board[y + 2][x] === 3 - turnColor &&
      board[y + 3][x] === 3 - turnColor &&
      board[y + 4][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //五個下が自分と同じ色
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      board[y + 2][x] === 3 - turnColor &&
      board[y + 3][x] === 3 - turnColor &&
      board[y + 4][x] === 3 - turnColor &&
      board[y + 5][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //六個下が自分と同じ色
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      board[y + 2][x] === 3 - turnColor &&
      board[y + 3][x] === 3 - turnColor &&
      board[y + 4][x] === 3 - turnColor &&
      board[y + 5][x] === 3 - turnColor &&
      board[y + 6][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      newBoard[y + 5][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //七個下が自分と同じ色
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      board[y + 2][x] === 3 - turnColor &&
      board[y + 3][x] === 3 - turnColor &&
      board[y + 4][x] === 3 - turnColor &&
      board[y + 5][x] === 3 - turnColor &&
      board[y + 6][x] === 3 - turnColor &&
      board[y + 7][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      newBoard[y + 5][x] = turnColor;
      newBoard[y + 6][x] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*右*/
    //二個右が自分と同じ色
    if (
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      board[y][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //三個右が自分と同じ色
    if (
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      board[y][x + 2] === 3 - turnColor &&
      board[y][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //四個右が自分と同じ色
    if (
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      board[y][x + 2] === 3 - turnColor &&
      board[y][x + 3] === 3 - turnColor &&
      board[y][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //五個右が自分と同じ色
    if (
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      board[y][x + 2] === 3 - turnColor &&
      board[y][x + 3] === 3 - turnColor &&
      board[y][x + 4] === 3 - turnColor &&
      board[y][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //六個右が自分と同じ色
    if (
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      board[y][x + 2] === 3 - turnColor &&
      board[y][x + 3] === 3 - turnColor &&
      board[y][x + 4] === 3 - turnColor &&
      board[y][x + 5] === 3 - turnColor &&
      board[y][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      newBoard[y][x + 5] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //七個右が自分と同じ色
    if (
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      board[y][x + 2] === 3 - turnColor &&
      board[y][x + 3] === 3 - turnColor &&
      board[y][x + 4] === 3 - turnColor &&
      board[y][x + 5] === 3 - turnColor &&
      board[y][x + 6] === 3 - turnColor &&
      board[y][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      newBoard[y][x + 5] = turnColor;
      newBoard[y][x + 6] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*左*/
    //二個左が自分と同じ色
    if (
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      board[y][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //三個左が自分と同じ色
    if (
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      board[y][x - 2] === 3 - turnColor &&
      board[y][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //四個左が自分と同じ色
    if (
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      board[y][x - 2] === 3 - turnColor &&
      board[y][x - 3] === 3 - turnColor &&
      board[y][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //五個左が自分と同じ色
    if (
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      board[y][x - 2] === 3 - turnColor &&
      board[y][x - 3] === 3 - turnColor &&
      board[y][x - 4] === 3 - turnColor &&
      board[y][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //六個左が自分と同じ色
    if (
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      board[y][x - 2] === 3 - turnColor &&
      board[y][x - 3] === 3 - turnColor &&
      board[y][x - 4] === 3 - turnColor &&
      board[y][x - 5] === 3 - turnColor &&
      board[y][x - 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      newBoard[y][x - 5] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //七個左が自分と同じ色
    if (
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      board[y][x - 2] === 3 - turnColor &&
      board[y][x - 3] === 3 - turnColor &&
      board[y][x - 4] === 3 - turnColor &&
      board[y][x - 5] === 3 - turnColor &&
      board[y][x - 6] === 3 - turnColor &&
      board[y][x - 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      newBoard[y][x - 5] = turnColor;
      newBoard[y][x - 6] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*右斜め上*/
    //右斜め上二個が自分と同じ色
    if (
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y - 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //右斜め上三個が自分と同じ色
    if (
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y - 2][x + 2] === 3 - turnColor &&
      board[y - 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //右斜め上四個が自分と同じ色
    if (
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y - 2][x + 2] === 3 - turnColor &&
      board[y - 3][x + 3] === 3 - turnColor &&
      board[y - 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //右斜め上五個自分と同じ色
    if (
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y - 2][x + 2] === 3 - turnColor &&
      board[y - 3][x + 3] === 3 - turnColor &&
      board[y - 4][x + 4] === 3 - turnColor &&
      board[y - 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //右斜め上六個が自分と同じ色
    if (
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y - 2][x + 2] === 3 - turnColor &&
      board[y - 3][x + 3] === 3 - turnColor &&
      board[y - 4][x + 4] === 3 - turnColor &&
      board[y - 5][x + 5] === 3 - turnColor &&
      board[y - 6][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      newBoard[y - 5][x + 5] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //右斜め上七個が自分と同じ色
    if (
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      board[y - 2][x + 2] === 3 - turnColor &&
      board[y - 3][x + 3] === 3 - turnColor &&
      board[y - 4][x + 4] === 3 - turnColor &&
      board[y - 5][x + 5] === 3 - turnColor &&
      board[y - 6][x + 6] === 3 - turnColor &&
      board[y - 7][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      newBoard[y - 5][x + 5] = turnColor;
      newBoard[y - 6][x + 6] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*右斜め下*/
    //右斜め下二個が自分と同じ色
    if (
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y + 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //右斜め下三個が自分と同じ色
    if (
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y + 2][x + 2] === 3 - turnColor &&
      board[y + 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //右斜め下四個が自分と同じ色
    if (
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y + 2][x + 2] === 3 - turnColor &&
      board[y + 3][x + 3] === 3 - turnColor &&
      board[y + 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //右斜め下五個自分と同じ色
    if (
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y + 2][x + 2] === 3 - turnColor &&
      board[y + 3][x + 3] === 3 - turnColor &&
      board[y + 4][x + 4] === 3 - turnColor &&
      board[y + 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //右斜め下六個が自分と同じ色
    if (
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y + 2][x + 2] === 3 - turnColor &&
      board[y + 3][x + 3] === 3 - turnColor &&
      board[y + 4][x + 4] === 3 - turnColor &&
      board[y + 5][x + 5] === 3 - turnColor &&
      board[y + 6][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      newBoard[y + 5][x + 5] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //右斜め下七個が自分と同じ色
    if (
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      board[y + 2][x + 2] === 3 - turnColor &&
      board[y + 3][x + 3] === 3 - turnColor &&
      board[y + 4][x + 4] === 3 - turnColor &&
      board[y + 5][x + 5] === 3 - turnColor &&
      board[y + 6][x + 6] === 3 - turnColor &&
      board[y + 7][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      newBoard[y + 5][x + 5] = turnColor;
      newBoard[y + 6][x + 6] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*左斜め上*/
    //左斜め上二個が自分と同じ色
    if (
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y - 2][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //左斜め上三個が自分と同じ色
    if (
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y - 2][x - 2] === 3 - turnColor &&
      board[y - 3][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //左斜め上四個が自分と同じ色
    if (
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y - 2][x - 2] === 3 - turnColor &&
      board[y - 3][x - 3] === 3 - turnColor &&
      board[y - 4][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //左斜め上五個自分と同じ色
    if (
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y - 2][x - 2] === 3 - turnColor &&
      board[y - 3][x - 3] === 3 - turnColor &&
      board[y - 4][x - 4] === 3 - turnColor &&
      board[y - 5][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //左斜め上六個が自分と同じ色
    if (
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y - 2][x - 2] === 3 - turnColor &&
      board[y - 3][x - 3] === 3 - turnColor &&
      board[y - 4][x - 4] === 3 - turnColor &&
      board[y - 5][x - 5] === 3 - turnColor &&
      board[y - 6][x - 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      newBoard[y - 5][x - 5] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //左斜め上七個が自分と同じ色
    if (
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      board[y - 2][x - 2] === 3 - turnColor &&
      board[y - 3][x - 3] === 3 - turnColor &&
      board[y - 4][x - 4] === 3 - turnColor &&
      board[y - 5][x - 5] === 3 - turnColor &&
      board[y - 6][x - 6] === 3 - turnColor &&
      board[y - 7][x - 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      newBoard[y - 5][x - 5] = turnColor;
      newBoard[y - 6][x - 6] = turnColor;
      setTurnColor(3 - turnColor);
    }

    /*左斜め下*/
    //左斜め下二個が自分と同じ色
    if (
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y + 2][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //左斜め下三個が自分と同じ色
    if (
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y + 2][x - 2] === 3 - turnColor &&
      board[y + 3][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //左斜め下四個が自分と同じ色
    if (
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y + 2][x - 2] === 3 - turnColor &&
      board[y + 3][x - 3] === 3 - turnColor &&
      board[y + 4][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      setTurnColor(3 - turnColor);
    }

    //左斜め下五個自分と同じ色
    if (
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y + 2][x - 2] === 3 - turnColor &&
      board[y + 3][x - 3] === 3 - turnColor &&
      board[y + 4][x - 4] === 3 - turnColor &&
      board[y + 5][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //左斜め下六個が自分と同じ色
    if (
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y + 2][x - 2] === 3 - turnColor &&
      board[y + 3][x - 3] === 3 - turnColor &&
      board[y + 4][x - 4] === 3 - turnColor &&
      board[y + 5][x - 5] === 3 - turnColor &&
      board[y + 6][x - 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      newBoard[y + 5][x - 5] = turnColor;
      setTurnColor(3 - turnColor);
    }
    //左斜め下七個が自分と同じ色
    if (
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      board[y + 2][x - 2] === 3 - turnColor &&
      board[y + 3][x - 3] === 3 - turnColor &&
      board[y + 4][x - 4] === 3 - turnColor &&
      board[y + 5][x - 5] === 3 - turnColor &&
      board[y + 6][x - 6] === 3 - turnColor &&
      board[y + 7][x - 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      newBoard[y + 5][x - 5] = turnColor;
      newBoard[y + 6][x - 6] = turnColor;
      setTurnColor(3 - turnColor);
    }

    setBoard(newBoard);
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
