import Product from "./Product";

const Main = (props) => {
    const {metaGames} = props;
    return (
        <main className="flex justify-center gap-10">
            {
                metaGames.map((game) => {
                    return <Product box={game.box} title={game.title} publisher={game.publisher} price={game.price} onSale={game.onSale}/>
                })
            }
        </main>
    );
}

export default Main;