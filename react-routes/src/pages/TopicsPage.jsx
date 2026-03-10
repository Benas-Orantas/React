import "../assets/css/TopicsPage.css"
import Header from "../components/Header"
import { Link } from "react-router";

const TopicsPage = () => {
    return (
        <div className="full-screen-page ">
        <Header />
        <main className="page_main_allignment">
            <section className="topics_alignment">
            <h1 className="latest-posts_style">Latest Blog Posts...</h1>
            <Link className="link" to="/css">CSS</Link>
            <Link className="link" to="/js">JS</Link>
            <Link className="link" to="/react">React</Link>
            <Link className="link" to="/html">HTML</Link>
            <Link className="link" to="/postgresql">PostgreSQL</Link>
            </section>
        </main>
        </div>
    )
}

export default TopicsPage