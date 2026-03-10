import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import oneshot from "../assets/oneshot.jpg"
import undertale from "../assets/undertale.jpg"
import deltarune from "../assets/deltarune.jpg"

const metaGames = [
    {
    "box": oneshot,
    "title": "Oneshot",
    "publisher": "Future Cat LLC",
    "price": 9.75,
    "onSale": false,
    },
    {
    "box": undertale,
    "title": "Undertale",
    "publisher": "tobyfox",
    "price": 7.00,
    "onSale": true,
    },
    {
    "box": deltarune,
    "title": "Deltarune",
    "publisher": "tobyfox",
    "price": 21.59,
    "onSale" : true,
    }
]

function ReactProps() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <Main metaGames={metaGames}/>
            <Footer />
        </div>
    );
}

export default ReactProps;