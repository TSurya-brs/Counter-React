import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [mini_count1, setMiniCount1] = useState(0);
  const [mini_count2, setMiniCount2] = useState(0);
  const [mini_count3, setMiniCount3] = useState(0);
  const [mini_count4, setMiniCount4] = useState(0);

  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);

  const [totalcount, setTotalCount] = useState(0);

  const increment = (counterIndex) => {
    if (counterIndex === 1) {
      setMiniCount1((prev) => prev + 1);
    }
    if (counterIndex === 2) {
      setMiniCount2((prev) => prev + 1);
    }
    if (counterIndex === 3) {
      setMiniCount3((prev) => prev + 1);
    }
    if (counterIndex === 4) {
      setMiniCount4((prev) => prev + 1);
    }
  };

  const decrement = (counterIndex) => {
    if (counterIndex === 1 && mini_count1 > 0) {
      setMiniCount1((prev) => prev - 1);
    }
    if (counterIndex === 2 && mini_count2 > 0) {
      setMiniCount2((prev) => prev - 1);
    }
    if (counterIndex === 3 && mini_count3 > 0) {
      setMiniCount3((prev) => prev - 1);
    }
    if (counterIndex === 4 && mini_count4 > 0) {
      setMiniCount4((prev) => prev - 1);
    }
  };

  const delete_ = (counterIndex) => {
    if (counterIndex === 1) {
      setIsVisible1(false);
      setMiniCount1(0);
    }
    if (counterIndex === 2) {
      setIsVisible2(false);
      setMiniCount2(0);
    }
    if (counterIndex === 3) {
      setIsVisible3(false);
      setMiniCount3(0);
    }
    if (counterIndex === 4) {
      setIsVisible4(false);
      setMiniCount4(0);
    }
  };

  useEffect(() => {
    const countTotal = [
      mini_count1,
      mini_count2,
      mini_count3,
      mini_count4,
    ].filter((count) => count > 0).length;
    setTotalCount(countTotal);
  }, [mini_count1, mini_count2, mini_count3, mini_count4]);

  const handleRestart = () => {
    setMiniCount1(0);
    setMiniCount2(0);
    setMiniCount3(0);
    setMiniCount4(0);
    setTotalCount(0);
  };

  return (
    <div className="counter-container">
      <div className="total-count">
        <input
          type="text"
          value={totalcount}
          readOnly
          className="total-input"
        />
      </div>

      <div>
        <button onClick={handleRestart} className="restart-btn">
          Restart
        </button>
      </div>

      {isVisible1 && (
        <div className="counter-box">
          <input
            type="text"
            value={mini_count1}
            onChange={(e) => setMiniCount1(Number(e.target.value))}
            className="counter-input"
          />
          <button onClick={() => increment(1)} className="action-btn">
            +
          </button>
          <button onClick={() => decrement(1)} className="action-btn">
            -
          </button>
          <button onClick={() => delete_(1)} className="delete-btn">
            Delete
          </button>
        </div>
      )}

      {isVisible2 && (
        <div className="counter-box">
          <input
            type="text"
            value={mini_count2}
            onChange={(e) => setMiniCount2(Number(e.target.value))}
            className="counter-input"
          />
          <button onClick={() => increment(2)} className="action-btn">
            +
          </button>
          <button onClick={() => decrement(2)} className="action-btn">
            -
          </button>
          <button onClick={() => delete_(2)} className="delete-btn">
            Delete
          </button>
        </div>
      )}

      {isVisible3 && (
        <div className="counter-box">
          <input
            type="text"
            value={mini_count3}
            onChange={(e) => setMiniCount3(Number(e.target.value))}
            className="counter-input"
          />
          <button onClick={() => increment(3)} className="action-btn">
            +
          </button>
          <button onClick={() => decrement(3)} className="action-btn">
            -
          </button>
          <button onClick={() => delete_(3)} className="delete-btn">
            Delete
          </button>
        </div>
      )}

      {isVisible4 && (
        <div className="counter-box">
          <input
            type="text"
            value={mini_count4}
            onChange={(e) => setMiniCount4(Number(e.target.value))}
            className="counter-input"
          />
          <button onClick={() => increment(4)} className="action-btn">
            +
          </button>
          <button onClick={() => decrement(4)} className="action-btn">
            -
          </button>
          <button onClick={() => delete_(4)} className="delete-btn">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;
