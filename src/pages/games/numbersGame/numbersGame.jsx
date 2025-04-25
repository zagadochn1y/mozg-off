import React, { useState } from "react";

import "./numbersGame.css";

import HeaderSection from '../../../components/HeaderSection';

const NumberSequenceGame = () => {
  const [level, setLevel] = useState(null);
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [status, setStatus] = useState("");
  const maxTurns = 5;

  const getLengthByLevel = (lvl) => {
    if (lvl === "easy") return 4;
    if (lvl === "medium") return 6;
    return 8;
  };

  const startGame = (lvl) => {
    setLevel(lvl);
    setScore(0);
    setTurn(0);
    setStatus("");
    nextRound(lvl, 1, 0);
  };

  const nextRound = (lvl, nextTurn, currentScore) => {
    if (nextTurn > maxTurns) {
      setStatus(`Игра окончена! Ваш счёт: ${currentScore}`);
      setShowInput(false);
      setSequence([]);
      return;
    }

    const length = getLengthByLevel(lvl);
    const newSequence = Array.from({ length }, () => Math.floor(Math.random() * 10));
    setSequence(newSequence);
    setUserInput("");
    setTurn(nextTurn);
    setScore(currentScore);
    setShowInput(false);
    setStatus("Запомните последовательность:");

    setTimeout(() => {
      setShowInput(true);
      setStatus("Введите числа через пробел:");
    }, 2000);
  };

  const checkAnswer = () => {
    const userSeq = userInput.trim().split(" ").map(Number);
    const isCorrect =
      userSeq.length === sequence.length &&
      userSeq.every((val, i) => val === sequence[i]);

    if (isCorrect) {
      setStatus("Правильно!");
      setTimeout(() => nextRound(level, turn + 1, score + 1), 1500);
    } else {
      setStatus(`Неверно. Было: ${sequence.join(" ")}`);
      setTimeout(() => nextRound(level, turn + 1, score), 1500);
    }

    setShowInput(false);
  };

  return (
    <>
        <HeaderSection />
        <div className="game-container">
        <h1>Последовательность Цифр</h1>
        {!level && (
            <div>
            <p>Выберите уровень сложности:</p>
            <button onClick={() => startGame("easy")}>Лёгкая</button>
            <button onClick={() => startGame("medium")}>Средняя</button>
            <button onClick={() => startGame("hard")}>Сложная</button>
            </div>
        )}

        {level && (
            <div className="gameArea">
            <p>Раунд: {turn} / {maxTurns}</p>
            {!showInput ? (
                <p className="sequence">{sequence.join(" ")}</p>
            ) : (
                <div>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Введите числа через пробел"
                />
                <button onClick={checkAnswer}>Проверить</button>
                </div>
            )}
            </div>
        )}

        <div id="status">{status}</div>
        </div>
    </>
  );
};

export default NumberSequenceGame;
