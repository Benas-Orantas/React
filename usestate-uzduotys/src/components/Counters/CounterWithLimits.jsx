import "./Counters.css"
import { useState } from "react";

const CounterWithLimits = () => {
  const [number, setNumber] = useState(0);

  const Increment = () => {
    if (number < 10) {
      return setNumber(number + 1);
    }
  };

  const Decrement = () => {
    if (number > 0) {
      return setNumber(number - 1);
    }
  };

  return (
    <section className="component counter-with-limits_component">
      <h3>COUNTER WITH LIMITS</h3>
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
    </section>
  );
};

export default CounterWithLimits;
