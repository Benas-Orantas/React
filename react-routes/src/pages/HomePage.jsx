import "../assets/css/HomePage.css"
import Header from "../components/Header"

const HomePage = () => {
    return (
        <div className="full-screen-page background">
        <Header />
        <main className="page_main_allignment main_allignment">
            <h1 className="greeting-text center-text">Welcome to the DevMountain tech blog!</h1>
            <h3 className="center-text text-white">Head over to the topic browser to see all the latest posts!</h3>
        </main>
        </div>
    )
}

export default HomePage