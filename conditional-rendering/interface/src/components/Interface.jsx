import { useState } from "react"

const Interface = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <main className="flex justify-center">
            <div className="border-2 border-gray-500">
                {tabs.map((tab, index) => (
                    <button className={`py-1 px-3 hover:bg-gray-200 ${activeTab === index ? "bg-gray-300" : ""}`} onClick={() => setActiveTab(index)}>
                        {tab.label}
                    </button>
                ))}
                <div className="text-center border-t-2 border-gray-500 py-3">{tabs[activeTab].content}</div>
            </div>
        </main>
    )

}

export default Interface