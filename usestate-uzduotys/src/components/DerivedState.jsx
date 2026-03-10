import "../assets/css/DerivedState.css";
import { useState } from "react";

const DerivedState = () => {
  const [price, setPrice] = useState(0.0);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0.0);

  const assignFinalPrice = () => {
    setFinalPrice(
      ((Number(price) * (100 - Number(discount))) / 100).toFixed(2),
    );
  };

  return (
    <section className="component derived-state_component">
        <h3>DERIVED STATE(DISCOUNT CALCULATOR)</h3>
      <div>
        <label>Original Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          className="input1"
          onChange={(p) => setPrice(p.target.value)}
        />
      </div>
      <div>
        <label>Discount Percentage:</label>
        <input
          type="number"
          id="percent"
          name="percentage"
          className="input1"
          onChange={(p) => setDiscount(p.target.value)}
        />
      </div>
      <button
        className="calculate-discount_button green_button"
        onClick={assignFinalPrice}
      >
        Calculate Discount
      </button>
      <p>Discounted Price: {finalPrice}</p>
    </section>
  );
};

export default DerivedState;
