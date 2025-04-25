import React, { useEffect, useState } from "react";

import "./memoryGame.css";

import HeaderSection from '../../../components/HeaderSection';

const COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

const getSequenceLength = (level) => {
  switch (level) {
    case 'easy': return 2;
    case 'medium': return 3;
    case 'hard': return 4;
    default: return 2;
  }
};

const ColorMemoryGame = () => {
  const [level, setLevel] = useState(null);
  const [sequence, setSequence] = useState([]);
  const [visibleSequence, setVisibleSequence] = useState([]); // 👈 отдельный массив для показа
  const [userInput, setUserInput] = useState([]);
  const [showChoices, setShowChoices] = useState(false);
  const [status, setStatus] = useState("");
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(0);
  const maxTurns = 5;

  const startGame = (lvl) => {
    setLevel(lvl);
    setScore(0);
    setTurn(0);
    setStatus("");
    nextRound(lvl, 0, 0);
  };

  const nextRound = (lvl, currentTurn, currentScore) => {
    if (currentTurn >= maxTurns) {
      setStatus(`Игра окончена! Ваш счёт: ${currentScore}`);
      setShowChoices(false);
      return;
    }

    const length = getSequenceLength(lvl);
    const newSeq = Array.from({ length }, () => COLORS[Math.floor(Math.random() * COLORS.length)]);

    setSequence(newSeq);
    setVisibleSequence([]);
    setUserInput([]);
    setShowChoices(false);
    setTurn(currentTurn + 1);
    setStatus("Запомни цвета!");

    // Показать поочерёдно
    newSeq.forEach((color, idx) => {
      setTimeout(() => {
        setVisibleSequence(prev => [...prev, color]);
      }, idx * 700);
    });

    // Через X времени показать выбор
    setTimeout(() => {
      setShowChoices(true);
      setVisibleSequence([]);
      setStatus("Выбери цвета в том же порядке:");
    }, length * 700 + 700);
  };

  const handleColorClick = (color) => {
    const updatedInput = [...userInput, color];
    setUserInput(updatedInput);

    if (updatedInput.length === sequence.length) {
      const isCorrect = updatedInput.every((c, i) => c === sequence[i]);
      if (isCorrect) {
        setScore(prev => prev + 1);
        setStatus("Верно!");
        setTimeout(() => nextRound(level, turn, score + 1), 1500);
      } else {
        setStatus(`Неверно! Правильная последовательность: ${sequence.join(", ")}`);
        setTimeout(() => nextRound(level, turn, score), 2000);
      }
      setShowChoices(false);
    }
  };

  return (
    <>
        <HeaderSection />
        <div className="color-game">
        <h1>Цветовая Память</h1>

        {!level && (
            <>
            <p>Выберите уровень сложности:</p>
            <button onClick={() => startGame('easy')}>Лёгкая</button>
            <button onClick={() => startGame('medium')}>Средняя</button>
            <button onClick={() => startGame('hard')}>Сложная</button>
            </>
        )}

        {level && (
            <>
            <p>Раунд: {turn} / {maxTurns}</p>
            <div id="gameArea">
                {!showChoices ? (
                <div className="sequence-view">
                    {visibleSequence.map((color, idx) => (
                    <div
                        key={idx}
                        className="color-box"
                        style={{ backgroundColor: color }}
                    ></div>
                    ))}
                </div>
                ) : (
                <div>
                    {COLORS.map((color) => (
                    <div
                        key={color}
                        className="color-box"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                    ></div>
                    ))}
                </div>
                )}
            </div>
            <div id="status">{status}</div>
            </>
        )}
        </div>
    </>
  );
};

export default ColorMemoryGame;
