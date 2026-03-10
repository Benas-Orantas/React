import "../assets/css/NotFound.css"
import { Link } from "react-router";

const NotFound = () => {
    return (
        <main className="not-found_component_allignment">
            <h2>Page not found</h2>
            <Link className="back-to-home_button" to="/">Back to Home Page</Link>
        </main>
    )
}

export default NotFound