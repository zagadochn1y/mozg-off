import React, { useState, useEffect } from "react";

import HeaderSection from '../../../components/HeaderSection';
import "./ClickGame.css";

const getRandomSequence = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 9));
};

const DifficultyOffset = {
  easy: 0,
  medium: 1,
  hard: 2,
};

const clickGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [clickable, setClickable] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [difficulty, setDifficulty] = useState("easy");
  const [message, setMessage] = useState("");
  const [flashingIndex, setFlashingIndex] = useState(null);

  const baseLength = 2;

  const updateGameInfo = (reset = false) => {
    if (reset) {
      setScore(0);
      setLevel(1);
    }
  };

  const flashSequence = async (seq) => {
    setClickable(false);
    for (let i = 0; i < seq.length; i++) {
      setFlashingIndex(seq[i]);
      await new Promise((res) => setTimeout(res, 500));
      setFlashingIndex(null);
      await new Promise((res) => setTimeout(res, 200));
    }
    setClickable(true);
  };

  const nextLevel = () => {
    const extra = DifficultyOffset[difficulty];
    const newSequence = getRandomSequence(baseLength + level + extra);
    setSequence(newSequence);
    setUserInput([]);
    setTimeout(() => flashSequence(newSequence), 1000);
  };

  const handleCellClick = (index) => {
    if (!clickable) return;
    const newUserInput = [...userInput, index];
    setUserInput(newUserInput);
    setFlashingIndex(index);
    setTimeout(() => setFlashingIndex(null), 300);

    if (sequence[newUserInput.length - 1] !== index) {
      setMessage("Ошибка! Начни заново.");
      setClickable(false);
      updateGameInfo(true);
      return;
    }

    if (newUserInput.length === sequence.length) {
      const newScore = score + 1;
      const newLevel = newScore % 3 === 0 ? level + 1 : level;
      setScore(newScore);
      setLevel(newLevel);
      setMessage("Отлично! Следующий уровень.");
      setTimeout(() => {
        setMessage("");
        nextLevel();
      }, 1000);
    }
  };

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setMessage("");
    nextLevel();
  };

  return (
    <>
      <HeaderSection />
      <div className="container">
        <h1>Запомни порядок</h1>
        <div className="info">
          Очки: <span>{score}</span> | Уровень: <span>{level}</span>
        </div>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Легкий</option>
          <option value="medium">Средний</option>
          <option value="hard">Сложный</option>
        </select>
        <button onClick={startGame}>Начать</button>
        <div className="grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`cell ${flashingIndex === i ? "flash" : ""}`}
              onClick={() => handleCellClick(i)}
            />
          ))}
        </div>
        <div className="message">{message}</div>
      </div>
    </>
  );
};

export default clickGame;
