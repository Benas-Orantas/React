import "./Counters.css"
import { useState } from "react";

const CounterWithHistory = () => {
  const [number, setNumber] = useState(0);
  const [counterHistory, setCounterHistory] = useState([]);

  const Increment = () => {
    setCounterHistory([...counterHistory, number]);
    setNumber(number + 1);
  };

  const Decrement = () => {
    setCounterHistory([...counterHistory, number]);
    setNumber(number - 1);
  };

  return (
    <section className="gray_border counter-with-history">
      <div>
        <h3>COUNTER WITH HISTORY</h3>
        <div className="flex-n-gap">
          <button
            onClick={Increment}
            className="increment-decrement_buttons increment_button"
          >
            +
          </button>
          <span className="number_align_size">{number}</span>
          <button
            onClick={Decrement}
            className="increment-decrement_buttons decrement_button"
          >
            -
          </button>
        </div>
      </div>
      <div className="gray_border counter-history_padding">
        <p>Counter History:</p>
        <ol>
          {counterHistory.map((element) => {
            return <li>{element}</li>;
          })}
        </ol>
      </div>
    </section>
  );
};

export default CounterWithHistory;
