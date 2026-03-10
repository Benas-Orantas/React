import ColorStripes from "./ColorStripes"
import hexColors from "../hexColors"

function MainPage() {
    const colors = hexColors()

    return (
        <main className="h-screen flex flex-col justify-between">
            <ColorStripes colors={colors}/>
        </main>
    )
}

export default MainPage