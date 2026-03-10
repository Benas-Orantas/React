import FlashCard from "./FlashCard"
const FlashCards = ({qna, changeState}) => {

    return (
        <section className="flex justify-center flex-wrap gap-20 max-h-100 max-w-300">
            {qna.map((e) => {
                return <FlashCard id={e.id} question={e.question} answer={e.answer} active={e.active} changeState={changeState}/>
            })}
        </section>
    )
}

export default FlashCards