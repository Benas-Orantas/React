const Product = ({box, title, publisher, price, onSale}) => {
    return (
        <div>
            {onSale == true && <p className="text-center text-white bg-red-500">SALE!</p>}
            <img src={box} alt={title} className="gamebox_size"/>
            <h2 className="center_text text-xl">{title}</h2>
            <p className="center_text">Published by: {publisher}</p>
            <p className="center_text">{price} €</p>
        </div>
    )
}

export default Product;