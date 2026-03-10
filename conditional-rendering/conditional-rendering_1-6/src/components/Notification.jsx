const Notification = ({type}) => {

    const notification = "Notification";

    return (
        <>
            {type === "success" && <p className="bg-green-500 button_padding mr-360 pl-2">{notification}</p>}
            {type === "error" && <p className="bg-red-500 text-white button_padding mr-360 pl-2">Error</p>}
            {type === "warning" && <p className="bg-yellow-300 button_padding mr-360 pl-2">{notification}</p>}
        </>
    )
}

export default Notification