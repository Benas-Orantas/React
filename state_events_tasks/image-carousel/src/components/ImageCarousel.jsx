import jevil from "../assets/images/jevil.png"
import spamtonNEO from "../assets/images/spamton_neo.gif"
import eram from "../assets/images/eram.gif"
import knight from "../assets/images/knight.png"
import hammerOfJustice from "../assets/images/hammer_of_justice.gif"
import { useState } from "react"

const ImageCarousel = () => {

    const images = [
        {
            name: "jevil",
            visual: jevil,
        },
        {
            name: "Spamton NEO",
            visual: spamtonNEO,
        },
        {
            name: "ERAM",
            visual: eram,
        },
        {
            name: "The Roaring Knigt",
            visual: knight,
        },
        {
            name: "The Hammer of Justice",
            visual: hammerOfJustice,
        }
    ]

    const [carousel, setCarousel] = useState(0)

    const nextImage = () => {
        if(carousel < Number(images.length - 1)) {
            setCarousel(carousel + 1)
        } else {
            setCarousel(0)
        }
    }

    const prevImage = () => {
        if (carousel > 0) {
            setCarousel(carousel - 1)
        } else {
            setCarousel(4)
        }
    }

    return (
        <main className="flex justify-between">
            <button className="text-9xl cursor-pointer" onClick={prevImage}>←</button>
            <img src={images[carousel].visual} alt={images[carousel].name}/>
            <button className="text-9xl cursor-pointer" onClick={nextImage}>→</button>
        </main>
    )
}

export default ImageCarousel