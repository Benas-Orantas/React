import "../assets/css/Header.css"
import logo from "../assets/images/dm_logo.png"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header>
            <img src={logo} alt="devmountain logo" className="logo"/>
            <NavBar />
        </header>
    )
}

export default Header