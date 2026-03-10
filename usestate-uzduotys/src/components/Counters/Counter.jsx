import "./Counters.css"
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const Increment = () => {
    return setNumber(number + 1);
  };

  const Decrement = () => {
    return setNumber(number - 1);
  };

  return (
    <section className="component width-n-margin1">
      <h3>COUNTER</h3>
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

export default Counter;
