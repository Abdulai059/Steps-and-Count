import { useState } from "react";
import "../src/index.css";

function Count() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  // Get today's date
  const today = new Date();

  const date = new Date("Aug 7 2025");
  date.setDate(today.getDate() + count);

  // function handleStepPlus() {
  //   {
  //     setStep((s) => s + 1);
  //   }
  // }
  // function handleStepMinus() {
  //   {
  //     setStep((s) => s - 1);
  //   }
  // }

  function handleCountPlus() {
    {
      setCount((c) => c + step);
    }
  }
  function handleCountMinus() {
    {
      setCount((c) => c - step);
    }
  }
  return (
    <>
      <div className="steps">
        <div className="count">
          {/* <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleStepMinus}
          >
            -
          </button> */}

          {/* Implentiting the range slider */}
          <input
            class="slider"
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span className="step-message">step: {step}</span>
          {/* <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleStepPlus}
          >
            +
          </button> */}
        </div>

        <div className="count">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleCountMinus}
          >
            -
          </button>
          {/* Inplementing the count slider */}
          <input
            className="no-spinner"
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          {/* <span className=" ">Count: {count}</span> */}
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleCountPlus}
          >
            +
          </button>
        </div>

        <p className="message">
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days ago was`}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        {/* Implementing Reset Button */}

        {count !== 0 || step !== 1 ? (
          <div className="reset">
            <button
              onClick={handleReset}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Count;
