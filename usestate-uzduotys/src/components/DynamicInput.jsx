import { useState } from "react";

const DynamicInput = () => {
  const [name, setName] = useState("");

  const Naming = (n) => {
    return setName(n);
  };

  return (
    <section className="component width-n-margin1">
      <h3>Dynamic Input</h3>
      <input
        className="input1"
        type="text"
        id="greeting"
        name="greeting"
        onChange={(n) => Naming(n.target.value)}
      />
      <p className="text-center">Greetings {name}</p>
    </section>
  );
};

export default DynamicInput;
