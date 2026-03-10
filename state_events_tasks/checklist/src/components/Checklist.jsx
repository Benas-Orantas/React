import { useState } from "react"

const Checklist = () => {

    const list = [
        {
            name: "fire",
            symbol: "🔥",
            active: false
        }, 
        {
            name: "lightning",
            symbol: "⚡",
            active: false
        },
        {
            name: "water",
            symbol: "🌊",
            active: false
        },
        {
            name: "ice",
            symbol: "🧊",
            active: false
        },
        {
            name: "blood",
            symbol: "🩸",
            active: false
        },
        {
            name: "earth",
            symbol: "🪨",
            active: false
        },
        {
            name: "metal",
            symbol: "🔩",
            active: false
        },
        {
            name: "lava",
            symbol: "🌋",
            active: false
        },
        {
            name: "air",
            symbol: "༄",
            active: false
        },
        {
            name: "sound",
            symbol: "🗣️",
            active: false
        }
    ]

    const [checklist, setChecklist] = useState(list.map((l) => ({
        ...l
    })))

    const ifChecked = (index) => {
        setChecklist(checklist.map((l, currentIndex) => {
            return currentIndex === index ? {...l, active:!l.active} : l
        }))
    }

    return (
        <main className="border-2 border-gray-500 mx-170">
            {checklist.map((l, index) => {
                return (
                <section className="flex gap-2">
                    <div>
                    <input type="checkbox" id={l.name} name={l.name} onChange={() => ifChecked(index)}/>
                    <label>{l.name}</label>
                    </div>
                    {l.active === true && <p>{l.symbol}</p>}
                </section>
            )
            })}
        </main>
    )
}

export default Checklist