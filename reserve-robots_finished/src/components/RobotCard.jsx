const RobotCard = ({ robot, onReserve }) => {
    return (
        <div className={`robot_card_style ${robot.reserved ? "grayscale" : ""}`}>
            <img src={robot.avatar} alt={robot.name}/>
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
            {robot.reserved === false && <button className="reseve_button_style" onClick={() => onReserve(robot.id)}>Reserve</button>}
            {robot.reserved === true && <p className="font-bold">Reserved</p>}
        </div>
    )
}

export default RobotCard