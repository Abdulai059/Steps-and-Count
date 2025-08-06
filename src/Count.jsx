import { useState } from "react";
import "../src/index.css";

function Count() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // Get today's date
  const today = new Date();

  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + count);

  const formattedDate = futureDate.toDateString();

  function handleStepPlus() {
    {
      setStep((s) => s + 1);
    }
  }
  function handleStepMinus() {
    {
      setStep((s) => Math.max(s - 1, 1));
    }
  }

  function handleCountPlus() {
    {
      setCount((c) => c + 1);
    }
  }
  function handleCountMinus() {
    {
      setCount((c) => c - 1);
    }
  }
  return (
    <>
      <div className="steps">
        <div className="count">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleStepMinus}
          >
            -
          </button>
          <span className="step-message">step: {step}</span>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleStepPlus}
          >
            +
          </button>
        </div>

        <div className="count">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleCountMinus}
          >
            -
          </button>
          <span className="count-message">Count: {count}</span>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleCountPlus}
          >
            +
          </button>
        </div>

        <p className="message">
          {count} days from today is <strong>{formattedDate}</strong>
        </p>
      </div>
    </>
  );
}
export default Count;
