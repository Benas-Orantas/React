const Header = ({search, setSearch}) => {
    return (
        <header className="header_style">
            <h1>RENT A ROBOT</h1>
            <input className="input_style" placeholder="search for robots" value={search}
            onChange={(e) => setSearch(e.target.value)}></input>
        </header>
    )
}

export default Header