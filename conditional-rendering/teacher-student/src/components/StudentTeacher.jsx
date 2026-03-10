import { useState } from "react"

const StudentTeacher = () => {
    const [userType, changeUserType] = useState("student")

    const change = () => {
        return userType === "student" ? changeUserType("teacher") : changeUserType("student")
    }

    return (
        <main className="flex flex-col justify-center">
            {userType === "student" && <p className="text-center">Grade</p>}
            {userType === "teacher" && <p className="text-center">Subject</p>}
            <button onClick={change} className="bg-blue-400 mx-170 py-1 cursor-pointer rounded-lg text-white">Change User Type</button>
        </main>
    )
}

export default StudentTeacher