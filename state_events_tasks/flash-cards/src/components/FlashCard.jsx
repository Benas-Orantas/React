const FlashCard = ({id, question, answer, active, changeState}) => {

    return (
        <div className={`flex justify-center cursor-pointer border border-gray-500 rounded-lg p-10 text-center w-60 h-60 ${active === true ? "bg-[#fff200]" : "bg-[#ffaec9]"}`} onClick={() => changeState(id)}>
            {active === false && <p className="self-center">{question}</p>}
            {active === true && <p className="self-center">{answer}</p>}
        </div>
    )
}

export default FlashCard