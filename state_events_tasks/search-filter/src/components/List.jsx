const List = ({games}) => {

    return (
        <main className="text-center">
            <ul>
                {games.map((game) => {
                    return (<li>{game}</li>)
                })}
            </ul>
        </main>
    )
}

export default List;