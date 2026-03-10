import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserDashboard from "./UserDashboard";
import AdminPanel from "./AdminPanel";
import Notification from "./Notification";

let isLoading = false;
let role = "admin";
let tasks = ["idk", "I'm tired..."];
let type = "success"

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const change = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  if (isLoading === true) {
    return <h1 className="center_text">Loading...</h1>
  } else if (isLoggedIn === false) {
    return (
      <div className="flexing_column">
        <h1 className="center_text">Please log in or sign up</h1>
        <button onClick={change} className="button_padding button2_design button_margin">Sing up</button>
        <button onClick={change} className="log_in_button loginout_button button_margin button_padding">Log in</button>
      </div>
    );
  } else if (isLoggedIn === true) {
    return (
        <>
      <div className="flexing_column">
        <h1 className="center_text">Welcome, User</h1>
        <button className="profile_button button_margin button2_design">Profile</button>
        <button onClick={change} className="log_out_button loginout_button button_margin button_padding">Log Out</button>
        {role === null && <GuestPage />}
        {role === "user" && <UserDashboard />}
        {role === "admin" && <AdminPanel />}
        <p className="center_text mt-5">Tasks:</p>
        <ul className="center_text">
        {tasks.length === 0 ? <li>No Tasks Available</li> : tasks.map((task) => {
            return <li>{task}</li>
        })}
        </ul>
      </div>
      <Notification type={type}/>
      </>
    );
  } else {
    return <h1 className="text-white bg-red-500 center_text">Error!</h1>;
  }
};

export default MainPage;
