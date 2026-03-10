import { useState } from "react";

const Accordion = ({ questions }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <main className=" mx-50 flex flex-col gap-4">
        <h3 className="text-3xl text-white text-center font-bold">Frequently Asked Questions</h3>
      {questions.map((question) => {
        return (
          <section className="bg-white flex flex-col justify-center py-2 pl-4">
            <div className="flex gap-2">
              <h3>{question.title}</h3>
              <button
                className="border-2 border-blue-600 rounded-sm px-1 pb-1 bg-blue-400 text-blue-800 cursor-pointer"
                onClick={() => toggle(question.id)}
              >
                {selected === question.id ? "-" : "+"}
              </button>
            </div>
            {selected === question.id && <p>{question.info}</p>}
          </section>
        );
      })}
    </main>
  );
};

export default Accordion;
