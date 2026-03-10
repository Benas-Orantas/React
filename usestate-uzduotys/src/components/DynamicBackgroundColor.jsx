import "../assets/css/DynamicBackgroundColor.css"
import { useState } from "react";

const DynamicBackgroundColor = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("red");

  const changeActive = () => {
    setActive(!active);
  };

  return (
    <section
      className={`gray_border dynamic-background-color_component ${color === "red" ? "bg-red-500" : color === "green" ? "bg-green-500" : "bg-blue-500"}`}
    >
        <h3 className="text-white">DYNAMIC BACKGROUND COLOR</h3>
      {active === false && (
        <button className="menu_button" onClick={changeActive}>
          ˭
        </button>
      )}
      {active === true && (
        <div className="menu">
          <button className="close-menu_button" onClick={changeActive}>
            ✖
          </button>
          <div className="color_buttons_allignment">
            <button onClick={() => setColor("red")}>
              🟥
            </button>
            <button onClick={() => setColor("green")}>
              🟩
            </button>
            <button onClick={() => setColor("blue")}>
              🟦
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DynamicBackgroundColor;
