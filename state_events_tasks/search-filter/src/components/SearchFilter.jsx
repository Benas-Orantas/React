const SearchFilter = ({search, setSearch}) => {
    return (
        <header className="flex gap-2 justify-center">
            <label>Search:</label>
            <input type="text" id="search" name="search" className="border border-gray-500" value={search} onInput={(s) => setSearch(s.target.value)}/>
        </header>
    )
}

export default SearchFilter;