'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    //1=>黒,2=>白
  ]);
  const [turnColor, setTurnColor] = useState(1);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    console.log(board);

    //↓↓↓

    /*  y - 1 >= 0
    一つ上は盤内か（上方向に行き過ぎていないか)
      y <8
      一つ上が盤内か（盤のｙの最大値をこえていないか）
      x <8
      盤のｘの最大値を超えてないか*/

    /*上 */
    //二個上が自分と同じ色

    if (
      y - 1 >= 0 &&
      y - 1 < 8 &&
      x < 8 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      y - 2 < 8 &&
      x < 8 &&
      board[y - 2][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('上１裏返す');

    //三個上が自分と同じ色
    if (
      y - 1 >= 0 &&
      y - 1 < 8 &&
      x < 8 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      y - 2 < 8 &&
      x < 8 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      y - 3 < 8 &&
      x < 8 &&
      board[y - 3][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('上２裏返す');

    //四個上が自分と同じ色
    if (
      y - 1 >= 0 &&
      y - 1 < 8 &&
      x < 8 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      y - 2 < 8 &&
      x < 8 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      y - 3 < 8 &&
      x < 8 &&
      board[y - 3][x] === 3 - turnColor &&
      y - 4 >= 0 &&
      y - 4 < 8 &&
      x < 8 &&
      board[y - 4][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('上３裏返す');

    //五個上が自分と同じ色
    if (
      y - 1 >= 0 &&
      y - 1 < 8 &&
      x < 8 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      y - 2 < 8 &&
      x < 8 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      y - 3 < 8 &&
      x < 8 &&
      board[y - 3][x] === 3 - turnColor &&
      y - 4 >= 0 &&
      -4 < 8 &&
      x < 8 &&
      board[y - 4][x] === 3 - turnColor &&
      y - 5 >= 0 &&
      y - 5 < 8 &&
      x < 8 &&
      board[y - 5][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('上４裏返す');

    //六個上が自分と同じ色
    if (
      y - 1 >= 0 &&
      y - 1 < 8 &&
      x < 8 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      y - 2 < 8 &&
      x < 8 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      y - 3 < 8 &&
      x < 8 &&
      board[y - 3][x] === 3 - turnColor &&
      y - 4 >= 0 &&
      y - 4 < 8 &&
      x < 8 &&
      board[y - 4][x] === 3 - turnColor &&
      y - 5 >= 0 &&
      y - 5 < 8 &&
      x < 8 &&
      board[y - 5][x] === 3 - turnColor &&
      y - 6 >= 0 &&
      y - 6 < 8 &&
      x < 8 &&
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
    console.log('上５裏返す');

    //七個上が自分と同じ色
    if (
      y - 1 >= 0 &&
      y - 1 < 8 &&
      x < 8 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      y - 2 < 8 &&
      x < 8 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      y - 3 < 8 &&
      x < 8 &&
      board[y - 3][x] === 3 - turnColor &&
      y - 4 >= 0 &&
      y - 4 < 8 &&
      x < 8 &&
      board[y - 4][x] === 3 - turnColor &&
      y - 5 >= 0 &&
      y - 5 < 8 &&
      x < 8 &&
      board[y - 5][x] === 3 - turnColor &&
      y - 6 >= 0 &&
      y - 6 < 8 &&
      x < 8 &&
      board[y - 6][x] === 3 - turnColor &&
      y - 7 >= 0 &&
      y - 7 < 8 &&
      x < 8 &&
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
    console.log('上６裏返す');

    /*下 */
    //二個下が自分と同じ色
    if (
      y + 1 >= 0 &&
      y + 1 < 8 &&
      x < 8 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 >= 0 &&
      y + 2 < 8 &&
      x < 8 &&
      board[y + 2][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('下１裏返す');

    //三個下が自分と同じ色
    if (
      y + 1 >= 0 &&
      y + 1 < 8 &&
      x < 8 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 >= 0 &&
      y + 2 < 8 &&
      x < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 >= 0 &&
      y + 3 < 8 &&
      x < 8 &&
      board[y + 3][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('下２裏返す');

    //四個下が自分と同じ色
    if (
      y + 1 >= 0 &&
      y + 1 < 8 &&
      x < 8 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 >= 0 &&
      y + 2 < 8 &&
      x < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 >= 0 &&
      y + 3 < 8 &&
      x < 8 &&
      board[y + 3][x] === 3 - turnColor &&
      y + 4 >= 0 &&
      y + 4 < 8 &&
      x < 8 &&
      board[y + 4][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('下３裏返す');

    //五個下が自分と同じ色
    if (
      y + 1 >= 0 &&
      y + 1 < 8 &&
      x < 8 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 >= 0 &&
      y + 2 < 8 &&
      x < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 >= 0 &&
      y + 3 < 8 &&
      x < 8 &&
      board[y + 3][x] === 3 - turnColor &&
      y + 4 >= 0 &&
      y + 4 < 8 &&
      x < 8 &&
      board[y + 4][x] === 3 - turnColor &&
      y + 5 >= 0 &&
      y + 5 < 8 &&
      x < 8 &&
      board[y + 5][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('下４裏返す');

    //六個下が自分と同じ色
    if (
      y + 1 >= 0 &&
      y + 1 < 8 &&
      x < 8 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 >= 0 &&
      y + 2 < 8 &&
      x < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 >= 0 &&
      y + 3 < 8 &&
      x < 8 &&
      board[y + 3][x] === 3 - turnColor &&
      y + 4 >= 0 &&
      y + 4 < 8 &&
      x < 8 &&
      board[y + 4][x] === 3 - turnColor &&
      y + 5 >= 0 &&
      y + 5 < 8 &&
      x < 8 &&
      board[y + 5][x] === 3 - turnColor &&
      y + 6 >= 0 &&
      y + 6 < 8 &&
      x < 8 &&
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
    console.log('下５裏返す');

    //七個下が自分と同じ色
    if (
      y + 1 >= 0 &&
      y + 1 < 8 &&
      x < 8 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 >= 0 &&
      y + 2 < 8 &&
      x < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 >= 0 &&
      y + 3 < 8 &&
      x < 8 &&
      board[y + 3][x] === 3 - turnColor &&
      y + 4 >= 0 &&
      y + 4 < 8 &&
      x < 8 &&
      board[y + 4][x] === 3 - turnColor &&
      y + 5 >= 0 &&
      y + 5 < 8 &&
      x < 8 &&
      board[y + 5][x] === 3 - turnColor &&
      y + 6 >= 0 &&
      y + 6 < 8 &&
      x < 8 &&
      board[y + 6][x] === 3 - turnColor &&
      y + 7 >= 0 &&
      y + 7 < 8 &&
      x < 8 &&
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
    console.log('下６裏返す');

    /*右*/
    //二個右が自分と同じ色
    if (
      x + 1 >= 0 &&
      y < 8 &&
      x + 1 < 8 &&
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 >= 0 &&
      y < 8 &&
      x + 2 < 8 &&
      board[y][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右１裏返す');

    //三個右が自分と同じ色
    if (
      x + 1 >= 0 &&
      y < 8 &&
      x + 1 < 8 &&
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 >= 0 &&
      y < 8 &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 >= 0 &&
      y < 8 &&
      x + 3 < 8 &&
      board[y][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右２裏返す');

    //四個右が自分と同じ色
    if (
      x + 1 >= 0 &&
      y < 8 &&
      x + 1 < 8 &&
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 >= 0 &&
      y < 8 &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 >= 0 &&
      y < 8 &&
      x + 3 < 8 &&
      board[y][x + 3] === 3 - turnColor &&
      x + 4 >= 0 &&
      y < 8 &&
      x + 4 < 8 &&
      board[y][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右３裏返す');

    //五個右が自分と同じ色
    if (
      x + 1 >= 0 &&
      y < 8 &&
      x + 1 < 8 &&
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 >= 0 &&
      y < 8 &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 >= 0 &&
      y < 8 &&
      x + 3 < 8 &&
      board[y][x + 3] === 3 - turnColor &&
      x + 4 >= 0 &&
      y < 8 &&
      x + 4 < 8 &&
      board[y][x + 4] === 3 - turnColor &&
      x + 5 >= 0 &&
      y < 8 &&
      x + 5 < 8 &&
      board[y][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右４裏返す');

    //六個右が自分と同じ色
    if (
      x + 1 >= 0 &&
      y < 8 &&
      x + 1 < 8 &&
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 >= 0 &&
      y < 8 &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 >= 0 &&
      y < 8 &&
      x + 3 < 8 &&
      board[y][x + 3] === 3 - turnColor &&
      x + 4 >= 0 &&
      y < 8 &&
      x + 4 < 8 &&
      board[y][x + 4] === 3 - turnColor &&
      x + 5 >= 0 &&
      y < 8 &&
      x + 5 < 8 &&
      board[y][x + 5] === 3 - turnColor &&
      x + 6 >= 0 &&
      y < 8 &&
      x + 6 < 8 &&
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
    console.log('右５裏返す');

    //七個右が自分と同じ色
    if (
      x + 1 >= 0 &&
      y < 8 &&
      x + 1 < 8 &&
      board[x + 1] !== undefined &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 >= 0 &&
      y < 8 &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 >= 0 &&
      y < 8 &&
      x + 3 < 8 &&
      board[y][x + 3] === 3 - turnColor &&
      x + 4 >= 0 &&
      y < 8 &&
      x + 4 < 8 &&
      board[y][x + 4] === 3 - turnColor &&
      x + 5 >= 0 &&
      y < 8 &&
      x + 5 < 8 &&
      board[y][x + 5] === 3 - turnColor &&
      x + 6 >= 0 &&
      y < 8 &&
      x + 6 < 8 &&
      board[y][x + 6] === 3 - turnColor &&
      x + 7 >= 0 &&
      y < 8 &&
      x + 7 < 8 &&
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
    console.log('右６裏返す');

    /*左*/
    //二個左が自分と同じ色
    if (
      x - 1 >= 0 &&
      y < 8 &&
      x - 1 < 8 &&
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      y < 8 &&
      x - 2 < 8 &&
      board[y][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左１裏返す');

    //三個左が自分と同じ色
    if (
      x - 1 >= 0 &&
      y < 8 &&
      x - 1 < 8 &&
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      y < 8 &&
      x - 2 < 8 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      y < 8 &&
      x - 3 < 8 &&
      board[y][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左２裏返す');

    //四個左が自分と同じ色
    if (
      x - 1 >= 0 &&
      y < 8 &&
      x - 1 < 8 &&
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      y < 8 &&
      x - 2 < 8 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      y < 8 &&
      x - 3 < 8 &&
      board[y][x - 3] === 3 - turnColor &&
      x - 4 >= 0 &&
      y < 8 &&
      x - 4 < 8 &&
      board[y][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左３裏返す');

    //五個左が自分と同じ色
    if (
      x - 1 >= 0 &&
      y < 8 &&
      x - 1 < 8 &&
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      y < 8 &&
      x - 2 < 8 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      y < 8 &&
      x - 3 < 8 &&
      board[y][x - 3] === 3 - turnColor &&
      x - 4 >= 0 &&
      y < 8 &&
      x - 4 < 8 &&
      board[y][x - 4] === 3 - turnColor &&
      x - 5 >= 0 &&
      y < 8 &&
      x - 5 < 8 &&
      board[y][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左４裏返す');

    //六個左が自分と同じ色
    if (
      x - 1 >= 0 &&
      y < 8 &&
      x - 1 < 8 &&
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      y < 8 &&
      x - 2 < 8 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      y < 8 &&
      x - 3 < 8 &&
      board[y][x - 3] === 3 - turnColor &&
      x - 4 >= 0 &&
      y < 8 &&
      x - 4 < 8 &&
      board[y][x - 4] === 3 - turnColor &&
      x - 5 >= 0 &&
      y < 8 &&
      x - 5 < 8 &&
      board[y][x - 5] === 3 - turnColor &&
      x - 6 >= 0 &&
      y < 8 &&
      x - 6 < 8 &&
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
    console.log('左５裏返す');

    //七個左が自分と同じ色
    if (
      x - 1 >= 0 &&
      y < 8 &&
      x - 1 < 8 &&
      board[x - 1] !== undefined &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      y < 8 &&
      x - 2 < 8 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      y < 8 &&
      x - 3 < 8 &&
      board[y][x - 3] === 3 - turnColor &&
      x - 4 >= 0 &&
      y < 8 &&
      x - 4 < 8 &&
      board[y][x - 4] === 3 - turnColor &&
      x - 5 >= 0 &&
      y < 8 &&
      x - 5 < 8 &&
      board[y][x - 5] === 3 - turnColor &&
      x - 6 >= 0 &&
      y < 8 &&
      x - 6 < 8 &&
      board[y][x - 6] === 3 - turnColor &&
      x - 7 >= 0 &&
      y < 8 &&
      x - 7 < 8 &&
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
    console.log('左６裏返す');

    /*右斜め上*/
    //右斜め上二個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x + 1 >= 0 &&
      y - 1 < 8 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 >= 0 &&
      y - 2 < 8 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め上１裏返す');

    //右斜め上三個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x + 1 >= 0 &&
      y - 1 < 8 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 >= 0 &&
      y - 2 < 8 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 >= 0 &&
      y - 3 < 8 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め上２裏返す');

    //右斜め上四個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x + 1 >= 0 &&
      y - 1 < 8 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 >= 0 &&
      y - 2 < 8 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 >= 0 &&
      y - 3 < 8 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x + 4 >= 0 &&
      y - 4 < 8 &&
      x + 4 < 8 &&
      board[y - 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め上３裏返す');

    //右斜め上五個自分と同じ色
    if (
      y - 1 >= 0 &&
      x + 1 >= 0 &&
      y - 1 < 8 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 >= 0 &&
      y - 2 < 8 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 >= 0 &&
      y - 3 < 8 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x + 4 >= 0 &&
      y - 4 < 8 &&
      x + 4 < 8 &&
      board[y - 4][x + 4] === 3 - turnColor &&
      y - 5 >= 0 &&
      x + 5 >= 0 &&
      y - 5 < 8 &&
      x + 5 < 8 &&
      board[y - 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め上４裏返す');

    //右斜め上六個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x + 1 >= 0 &&
      y - 1 < 8 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 >= 0 &&
      y - 2 < 8 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 >= 0 &&
      y - 3 < 8 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x + 4 >= 0 &&
      y - 4 < 8 &&
      x + 4 < 8 &&
      board[y - 4][x + 4] === 3 - turnColor &&
      y - 5 >= 0 &&
      x + 5 >= 0 &&
      y - 5 < 8 &&
      x + 5 < 8 &&
      board[y - 5][x + 5] === 3 - turnColor &&
      y - 6 >= 0 &&
      x + 6 >= 0 &&
      y - 6 < 8 &&
      x + 6 < 8 &&
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
    console.log('右斜め上５裏返す');

    //右斜め上七個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x + 1 >= 0 &&
      y - 1 < 8 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 >= 0 &&
      y - 2 < 8 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 >= 0 &&
      y - 3 < 8 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x + 4 >= 0 &&
      y - 4 < 8 &&
      x + 4 < 8 &&
      board[y - 4][x + 4] === 3 - turnColor &&
      y - 5 >= 0 &&
      x + 5 >= 0 &&
      y - 5 < 8 &&
      x + 5 < 8 &&
      board[y - 5][x + 5] === 3 - turnColor &&
      y - 6 >= 0 &&
      x + 6 >= 0 &&
      y - 6 < 8 &&
      x + 6 < 8 &&
      board[y - 6][x + 6] === 3 - turnColor &&
      y - 7 >= 0 &&
      x + 7 >= 0 &&
      y - 7 < 8 &&
      x + 7 < 8 &&
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
    console.log('右斜め上６裏返す');

    /*右斜め下*/
    //右斜め下二個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x + 1 >= 0 &&
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x + 2 >= 0 &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め下１裏返す');

    //右斜め下三個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x + 1 >= 0 &&
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x + 2 >= 0 &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x + 3 >= 0 &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め下２裏返す');

    //右斜め下四個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x + 1 >= 0 &&
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x + 2 >= 0 &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x + 3 >= 0 &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x + 4 >= 0 &&
      y + 4 < 8 &&
      x + 4 < 8 &&
      board[y + 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め下３裏返す');

    //右斜め下五個自分と同じ色
    if (
      y + 1 >= 0 &&
      x + 1 >= 0 &&
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x + 2 >= 0 &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x + 3 >= 0 &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x + 4 >= 0 &&
      y + 4 < 8 &&
      x + 4 < 8 &&
      board[y + 4][x + 4] === 3 - turnColor &&
      y + 5 >= 0 &&
      x + 5 >= 0 &&
      y + 5 < 8 &&
      x + 5 < 8 &&
      board[y + 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('右斜め下４裏返す');

    //右斜め下六個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x + 1 >= 0 &&
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x + 2 >= 0 &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x + 3 >= 0 &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x + 4 >= 0 &&
      y + 4 < 8 &&
      x + 4 < 8 &&
      board[y + 4][x + 4] === 3 - turnColor &&
      y + 5 >= 0 &&
      x + 5 >= 0 &&
      y + 5 < 8 &&
      x + 5 < 8 &&
      board[y + 5][x + 5] === 3 - turnColor &&
      y + 6 >= 0 &&
      x + 6 >= 0 &&
      y + 6 < 8 &&
      x + 6 < 8 &&
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
    console.log('右斜め下５裏返す');

    //右斜め下七個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x + 1 >= 0 &&
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x + 2 >= 0 &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x + 3 >= 0 &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x + 4 >= 0 &&
      y + 4 < 8 &&
      x + 4 < 8 &&
      board[y + 4][x + 4] === 3 - turnColor &&
      y + 5 >= 0 &&
      x + 5 >= 0 &&
      y + 5 < 8 &&
      x + 5 < 8 &&
      board[y + 5][x + 5] === 3 - turnColor &&
      y + 6 >= 0 &&
      x + 6 >= 0 &&
      y + 6 < 8 &&
      x + 6 < 8 &&
      board[y + 6][x + 6] === 3 - turnColor &&
      y + 7 >= 0 &&
      x + 7 >= 0 &&
      y + 7 < 8 &&
      x + 7 < 8 &&
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
    console.log('右斜め下６裏返す');

    /*左斜め上*/
    //左斜め上二個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      y - 1 < 8 &&
      x - 1 < 8 &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      y - 2 < 8 &&
      x - 2 < 8 &&
      board[y - 2][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め上１裏返す');

    //左斜め上三個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      y - 1 < 8 &&
      x - 1 < 8 &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      y - 2 < 8 &&
      x - 2 < 8 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      y - 3 < 8 &&
      x - 3 < 8 &&
      board[y - 3][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め上２裏返す');

    //左斜め上四個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      y - 1 < 8 &&
      x - 1 < 8 &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      y - 2 < 8 &&
      x - 2 < 8 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      y - 3 < 8 &&
      x - 3 < 8 &&
      board[y - 3][x - 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x - 4 >= 0 &&
      y - 4 < 8 &&
      x - 4 < 8 &&
      board[y - 4][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め上３裏返す');

    //左斜め上五個自分と同じ色
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      y - 1 < 8 &&
      x - 1 < 8 &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      y - 2 < 8 &&
      x - 2 < 8 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      y - 3 < 8 &&
      x - 3 < 8 &&
      board[y - 3][x - 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x - 4 >= 0 &&
      y - 4 < 8 &&
      x - 4 < 8 &&
      board[y - 4][x - 4] === 3 - turnColor &&
      y - 5 >= 0 &&
      x - 5 >= 0 &&
      y - 5 < 8 &&
      x - 5 < 8 &&
      board[y - 5][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め上４裏返す');

    //左斜め上六個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      y - 1 < 8 &&
      x - 1 < 8 &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      y - 2 < 8 &&
      x - 2 < 8 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      y - 3 < 8 &&
      x - 3 < 8 &&
      board[y - 3][x - 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x - 4 >= 0 &&
      y - 4 < 8 &&
      x - 4 < 8 &&
      board[y - 4][x - 4] === 3 - turnColor &&
      y - 5 >= 0 &&
      x - 5 >= 0 &&
      y - 5 < 8 &&
      x - 5 < 8 &&
      board[y - 5][x - 5] === 3 - turnColor &&
      y - 6 >= 0 &&
      x - 6 >= 0 &&
      y - 6 < 8 &&
      x - 6 < 8 &&
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
    console.log('左斜め上５裏返す');

    //左斜め上七個が自分と同じ色
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      y - 1 < 8 &&
      x - 1 < 8 &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      y - 2 < 8 &&
      x - 2 < 8 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      y - 3 < 8 &&
      x - 3 < 8 &&
      board[y - 3][x - 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x - 4 >= 0 &&
      y - 4 < 8 &&
      x - 4 < 8 &&
      board[y - 4][x - 4] === 3 - turnColor &&
      y - 5 >= 0 &&
      x - 5 >= 0 &&
      y - 5 < 8 &&
      x - 5 < 8 &&
      board[y - 5][x - 5] === 3 - turnColor &&
      y - 6 >= 0 &&
      x - 6 >= 0 &&
      y - 6 < 8 &&
      x - 6 < 8 &&
      board[y - 6][x - 6] === 3 - turnColor &&
      y - 7 >= 0 &&
      x - 7 >= 0 &&
      y - 7 < 8 &&
      x - 7 < 8 &&
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
    console.log('左斜め上６裏返す');

    /*左斜め下*/
    //左斜め下二個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x - 1 >= 0 &&
      y + 1 < 8 &&
      x - 1 < 8 &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x - 2 >= 0 &&
      y + 2 < 8 &&
      x - 2 < 8 &&
      board[y + 2][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め下１裏返す');

    //左斜め下三個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x - 1 >= 0 &&
      y + 1 < 8 &&
      x - 1 < 8 &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x - 2 >= 0 &&
      y + 2 < 8 &&
      x - 2 < 8 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x - 3 >= 0 &&
      y + 3 < 8 &&
      x - 3 < 8 &&
      board[y + 3][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め下２裏返す');

    //左斜め下四個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x - 1 >= 0 &&
      y + 1 < 8 &&
      x - 1 < 8 &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x - 2 >= 0 &&
      y + 2 < 8 &&
      x - 2 < 8 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x - 3 >= 0 &&
      y + 3 < 8 &&
      x - 3 < 8 &&
      board[y + 3][x - 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x - 4 >= 0 &&
      y + 4 < 8 &&
      x - 4 < 8 &&
      board[y + 4][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め下３裏返す');

    //左斜め下五個自分と同じ色
    if (
      y + 1 >= 0 &&
      x - 1 >= 0 &&
      y + 1 < 8 &&
      x - 1 < 8 &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x - 2 >= 0 &&
      y + 2 < 8 &&
      x - 2 < 8 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x - 3 >= 0 &&
      y + 3 < 8 &&
      x - 3 < 8 &&
      board[y + 3][x - 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x - 4 >= 0 &&
      y + 4 < 8 &&
      x - 4 < 8 &&
      board[y + 4][x - 4] === 3 - turnColor &&
      y + 5 >= 0 &&
      x - 5 >= 0 &&
      y + 5 < 8 &&
      x - 5 < 8 &&
      board[y + 5][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      setTurnColor(3 - turnColor);
    }
    console.log('左斜め下４裏返す');

    //左斜め下六個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x - 1 >= 0 &&
      y + 1 < 8 &&
      x - 1 < 8 &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x - 2 >= 0 &&
      y + 2 < 8 &&
      x - 2 < 8 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x - 3 >= 0 &&
      y + 3 < 8 &&
      x - 3 < 8 &&
      board[y + 3][x - 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x - 4 >= 0 &&
      y + 4 < 8 &&
      x - 4 < 8 &&
      board[y + 4][x - 4] === 3 - turnColor &&
      y + 5 >= 0 &&
      x - 5 >= 0 &&
      y + 5 < 8 &&
      x - 5 < 8 &&
      board[y + 5][x - 5] === 3 - turnColor &&
      y + 6 >= 0 &&
      x - 6 >= 0 &&
      y + 6 < 8 &&
      x - 6 < 8 &&
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
    console.log('左斜め下５裏返す');

    //左斜め下七個が自分と同じ色
    if (
      y + 1 >= 0 &&
      x - 1 >= 0 &&
      y + 1 < 8 &&
      x - 1 < 8 &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 >= 0 &&
      x - 2 >= 0 &&
      y + 2 < 8 &&
      x - 2 < 8 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 >= 0 &&
      x - 3 >= 0 &&
      y + 3 < 8 &&
      x - 3 < 8 &&
      board[y + 3][x - 3] === 3 - turnColor &&
      y + 4 >= 0 &&
      x - 4 >= 0 &&
      y + 4 < 8 &&
      x - 4 < 8 &&
      board[y + 4][x - 4] === 3 - turnColor &&
      y + 5 >= 0 &&
      x - 5 >= 0 &&
      y + 5 < 8 &&
      x - 5 < 8 &&
      board[y + 5][x - 5] === 3 - turnColor &&
      y + 6 >= 0 &&
      x - 6 >= 0 &&
      y + 6 < 8 &&
      x - 6 < 8 &&
      board[y + 6][x - 6] === 3 - turnColor &&
      y + 7 >= 0 &&
      x - 7 >= 0 &&
      y + 7 < 8 &&
      x - 7 < 8 &&
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
    console.log('左斜め下６裏返す');

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
