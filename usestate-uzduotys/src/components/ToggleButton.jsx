import "../assets/css/ToggleButton.css"
import { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);

  const click = () => {
    return setToggle(!toggle);
  };

  return (
    <section className="component toggle_button_component">
      <h3>Toggle Button</h3>
      <button
        className={`toggle-button ${toggle === false ? "red_button" : "green_button"}`}
        onClick={click}
      >
        {toggle === false ? "Off" : "On"}
      </button>
    </section>
  );
};

export default ToggleButton;
