import "../assets/css/ShowHide.css"
import { useState } from "react";

const ShowHide = () => {
  const [visible, setVisibility] = useState(true);

  const changeVisibility = () => {
    return setVisibility(!visible);
  };

  return (
    <section className="component show-hide_component">
      <h3>Show/Hide Content</h3>
      {visible === true && <p className="mb-2">You can hide me</p>}
      <button className="sky_button" onClick={changeVisibility}>
        {visible === true ? "Hide" : "Show"}
      </button>
    </section>
  );
};

export default ShowHide;
