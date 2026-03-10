const ColorStripes = (props) => {
    const {colors} = props
    return (
        <ul className="m-10">
            {colors.map((color) => {
                return <li className="text-center text-white py-5 font-bold" style={{backgroundColor: color}}>{color}</li>
            })}
        </ul>
    )
}

export default ColorStripes