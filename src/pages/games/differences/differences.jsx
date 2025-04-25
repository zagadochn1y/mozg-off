import React, { useState, useEffect } from "react";

import HeaderSection from '../../../components/HeaderSection';

import "./differencesGame.css";

const getSymbol = (shape) => {
  switch (shape) {
    case "circle": return "⚪";
    case "square": return "◼";
    case "triangle": return "▲";
    default: return shape;
  }
};

const generateRandomWeights = (level) => {
  const max = level === "easy" ? 5 : level === "medium" ? 9 : 15;
  return {
    circle: Math.floor(Math.random() * max) + 1,
    square: Math.floor(Math.random() * max) + 1,
    triangle: Math.floor(Math.random() * max) + 1,
  };
};

const generateEquations = (level, weights) => {
  const eqs = [];
  const { circle, square, triangle } = weights;

  if (level === "easy") {
    eqs.push(["circle", "circle", "=", circle * 2]);
    eqs.push(["square", "triangle", "=", square + triangle]);
    eqs.push(["circle", "square", "triangle", "=", circle + square + triangle]);
  }

  if (level === "medium") {
    eqs.push(["circle", "triangle", "=", circle + triangle]);
    eqs.push(["circle", "circle", "square", "=", circle * 2 + square]);
    eqs.push(["square", "triangle", "triangle", "=", square + triangle * 2]);
    eqs.push(["circle", "square", "triangle", "=", circle + square + triangle]);
  }

  if (level === "hard") {
    eqs.push(["circle", "square", "=", circle + square]);
    eqs.push(["triangle", "triangle", "triangle", "=", triangle * 3]);
    eqs.push(["circle", "circle", "triangle", "=", circle * 2 + triangle]);
    eqs.push(["square", "square", "triangle", "=", square * 2 + triangle]);
    eqs.push(["circle", "square", "triangle", "=", circle + square + triangle]);
  }

  return eqs;
};

const differencesGame = () => {
  const [level, setLevel] = useState("easy");
  const [weights, setWeights] = useState({});
  const [equations, setEquations] = useState([]);
  const [inputs, setInputs] = useState({ circle: "", square: "", triangle: "" });
  const [result, setResult] = useState("");

  const generatePuzzles = () => {
    const newWeights = generateRandomWeights(level);
    setWeights(newWeights);
    setEquations(generateEquations(level, newWeights));
    setInputs({ circle: "", square: "", triangle: "" });
    setResult("");
  };

  useEffect(() => {
    generatePuzzles();
  }, [level]);

  const checkAnswers = () => {
    const c = parseInt(inputs.circle);
    const s = parseInt(inputs.square);
    const t = parseInt(inputs.triangle);

    if (isNaN(c) || isNaN(s) || isNaN(t)) {
      setResult("Заполните все поля.");
      return;
    }

    let allCorrect = true;

    for (const eq of equations) {
      let sum = 0;
      const expected = eq[eq.length - 1];

      for (let i = 0; i < eq.length - 2; i++) {
        switch (eq[i]) {
          case "circle": sum += c; break;
          case "square": sum += s; break;
          case "triangle": sum += t; break;
        }
      }

      if (sum !== expected) {
        allCorrect = false;
        break;
      }
    }

    setResult(
      allCorrect ? "Отлично! Вы всё правильно решили!" : "Неправильно. Попробуйте ещё раз."
    );
  };

  return (
    <>
        <HeaderSection />
        <div className="puzzle-container">
        <h1>Угадай вес фигур</h1>
        <label>
            Уровень:
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="easy">Легкий</option>
            <option value="medium">Средний</option>
            <option value="hard">Сложный</option>
            </select>
        </label>
        <button onClick={generatePuzzles}>Новая игра</button>

        <div className="equations">
            {equations.map((eq, index) => (
            <div className="line" key={index}>
                {eq.map((item, i) => (
                <span key={i} className="symbol">
                    {getSymbol(item)}
                </span>
                ))}
            </div>
            ))}
        </div>

        <div className="inputs">
            <label>
            ⚪ ={" "}
            <input
                type="number"
                value={inputs.circle}
                onChange={(e) => setInputs({ ...inputs, circle: e.target.value })}
            />
            </label>
            <label>
            ◼ ={" "}
            <input
                type="number"
                value={inputs.square}
                onChange={(e) => setInputs({ ...inputs, square: e.target.value })}
            />
            </label>
            <label>
            ▲ ={" "}
            <input
                type="number"
                value={inputs.triangle}
                onChange={(e) => setInputs({ ...inputs, triangle: e.target.value })}
            />
            </label>
        </div>

        <button onClick={checkAnswers}>Проверить</button>
        <div className="result">{result}</div>
        </div>
    </>
  );
};

export default differencesGame;;
