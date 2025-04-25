import React, { useState, useEffect } from "react";

import "./pyramidGame.css";

import HeaderSection from '../../../components/HeaderSection';

const NumberPyramid = () => {
  const [level, setLevel] = useState(3);
  const [pyramid, setPyramid] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [result, setResult] = useState("");

  const generateBaseRow = (length) =>
    Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);

  const buildPyramid = (baseRow) => {
    const pyramid = [baseRow];
    for (let i = baseRow.length - 1; i > 0; i--) {
      const nextRow = [];
      for (let j = 0; j < i; j++) {
        nextRow.push(pyramid[0][j] + pyramid[0][j + 1]);
      }
      pyramid.unshift(nextRow);
    }
    return pyramid;
  };

  const generatePyramid = (lvl) => {
    const base = generateBaseRow(lvl);
    const pyr = buildPyramid(base);
    setPyramid(pyr);
    setUserInputs({});
    setResult("");
  };

  useEffect(() => {
    generatePyramid(level);
  }, [level]);

  const handleChange = (rowIdx, colIdx, value) => {
    setUserInputs((prev) => ({
      ...prev,
      [`${rowIdx}-${colIdx}`]: value,
    }));
  };

  const checkAnswers = () => {
    let correct = true;

    for (let i = 0; i < pyramid.length - 1; i++) {
      for (let j = 0; j < pyramid[i].length; j++) {
        const key = `${i}-${j}`;
        const userVal = parseInt(userInputs[key]);
        if (userVal !== pyramid[i][j]) {
          correct = false;
        }
      }
    }

    setResult(correct ? "Верно! Отличная работа." : "Есть ошибки. Попробуйте ещё раз.");
  };

  return (
    <>
        <HeaderSection />
        <div className="pyramid-container">
        <h1>Числовая пирамида</h1>
        <label>
            Выберите уровень:
            <select value={level} onChange={(e) => setLevel(parseInt(e.target.value))}>
            <option value={3}>Лёгкий (3 уровня)</option>
            <option value={4}>Средний (4 уровня)</option>
            <option value={5}>Сложный (5 уровней)</option>
            </select>
        </label>

        <div className="pyramid">
            {pyramid.map((row, rowIdx) => (
            <div key={rowIdx} className="pyramid-row">
                {row.map((val, colIdx) => {
                const isBase = rowIdx === pyramid.length - 1;
                return isBase ? (
                    <input
                    key={colIdx}
                    type="number"
                    className="cell"
                    value={val}
                    disabled
                    />
                ) : (
                    <input
                    key={colIdx}
                    type="number"
                    className="cell"
                    value={userInputs[`${rowIdx}-${colIdx}`] || ""}
                    onChange={(e) =>
                        handleChange(rowIdx, colIdx, e.target.value)
                    }
                    />
                );
                })}
            </div>
            ))}
        </div>

        <button onClick={checkAnswers}>Проверить</button>
        <p className="result">{result}</p>
        </div>
    </>
  );
};

export default NumberPyramid;
