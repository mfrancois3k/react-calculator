import React from "react";
import { useState } from "react";

// import ".App.css";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [next, setNext] = useState(false);
  const [lastOperator, setLastOperator] = useState("");

  function handleInput(value) {
    if (next) {
      setInput("");
      setNext(false);
    }
    setInput(input + value);
  }

  function handleOperator(value) {
    if (next) {
      setInput("");
      setNext(false);
    }
    setOperator(value);
  }

  function handleEqual() {
    if (operator === "") {
      setResult(parseFloat(input));
      setInput("");
      setLastOperator("");
      setNext(true);
    } else {
      setResult(
        calculate(parseFloat(input), parseFloat(result), operator, lastOperator)
      );
      setInput("");
      setLastOperator(operator);
      setNext(true);
    }
  }

  function handleClear() {
    setInput("");
    setResult(0);
    setOperator("");
    setLastOperator("");
    setNext(true);
  }

  function calculate(a, b, operator, lastOperator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case "+":
        return lastOperator === "+" ? b + a : b - a;
      case "-":
        return lastOperator === "-" ? b - a : b + a;
      case "*":
        return lastOperator === "*" ? b * a : b / a;
      case "/":
        return lastOperator === "/" ? b / a : b * a;
      default:
        return 0;
    }
  }

  // make input for calculator

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="calculator-display-result">{result}</div>
        <div className="calculator-display-input">{input}</div>
      </div>
      <div className="calculator-keypad">
        <div className="calculator-keypad-row">
          <div
            className="calculator-keypad-button"
            onClick={() => handleClear()}
          >
            C
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleOperator("/")}
            data-action="divide"
          >
            /
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleOperator("*")}
            data-action="multiply"
          >
            *
          </div>
        </div>
        <div className="calculator-keypad-row">
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(7)}
          >
            7
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(8)}
          >
            8
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(9)}
          >
            9
          </div>
        </div>
        <div className="calculator-keypad-row">
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(4)}
          >
            4
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(5)}
          >
            5
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(6)}
          >
            6
          </div>
        </div>
        <div className="calculator-keypad-row">
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(1)}
          >
            1
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(2)}
          >
            2
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(3)}
          >
            3
          </div>
        </div>
        <div className="calculator-keypad-row">
          <div
            className="calculator-keypad-button"
            onClick={() => handleInput(0)}
          >
            0
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleOperator("-")}
            data-action="subtract"
          >
            -
          </div>
          <div
            className="calculator-keypad-button"
            onClick={() => handleEqual()}
            data-action="equal"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
