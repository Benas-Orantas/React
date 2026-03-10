import RobotCard from "./RobotCard"


const Main = ({robots, onReserve}) => {
    return (
        <main className="main_style">
            {robots.map((robot) => (
                <RobotCard key={robot.id} robot={robot} onReserve={onReserve} />
            ))}
        </main>
    )
}

export default Main