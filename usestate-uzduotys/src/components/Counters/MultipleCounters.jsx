import "./Counters.css"
import { useState } from "react";

const MultipleCounters = () => {
  const [number1, setNumber1] = useState(0);

  const Increment1 = () => {
    return setNumber1(number1 + 1);
  };

  const Decrement1 = () => {
    return setNumber1(number1 - 1);
  };

  const [number2, setNumber2] = useState(0);

  const Increment2 = () => {
    return setNumber2(number2 + 1);
  };

  const Decrement2 = () => {
    return setNumber2(number2 - 1);
  };

  const ResetAll = () => {
    return (setNumber1(0), setNumber2(0));
  };

  return (
    <section className="component multiple-counters_component">
      <h3>MULTIPLE COUNTERS</h3>
      <div className="flex_center">
        <div className="flex-n-gap gray_border double-counters_padding">
          <button
            onClick={Increment1}
            className="increment-decrement_buttons increment_button"
          >
            +
          </button>
          <span className="number_align_size">{number1}</span>
          <button
            onClick={Decrement1}
            className="increment-decrement_buttons decrement_button"
          >
            -
          </button>
        </div>
        <button
          className="sky_button reset_button"
          onClick={ResetAll}
        >
          Reset All
        </button>
        <div className="flex-n-gap gray_border double-counters_padding">
          <button
            onClick={Increment2}
            className="increment-decrement_buttons increment_button"
          >
            +
          </button>
          <span className="number_align_size">{number2}</span>
          <button
            onClick={Decrement2}
            className="increment-decrement_buttons decrement_button"
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultipleCounters;
