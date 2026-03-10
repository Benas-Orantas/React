import { useState } from "react";
import deleteData from "../services/delete";
import updateData from "../services/update";
// import { getOne } from "../services/get";
import UserEditForm from "./UserEditForm";

const User = ({ user }) => {

    const [formShow, setFormShow] = useState(false);

    const likesHandler = async (id) => {
        // const user = await getOne(id)
        const {likes} = user;

        await updateData(id, {likes: likes+1})
    }
  return (
    <>
    {formShow && <UserEditForm user={user} setFormShow={setFormShow}/>}
    <div className="border-2 border-gray-500 p-8">
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Likes: {user.likes}</p>
      <p>Color: {user.color}</p>
      <p>Weapon: {user.weapon}</p>
      <p>
        Hobbies:{" "}
        {user.hobbies.map((hobby, index) => {
          return <span key={index}>{hobby}</span>;
        })}
      </p>
      <button
        onClick={() => {
          likesHandler(user.id);
        }}
        className="bg-green-500 cursor-pointer p-5"
      >
        Like
      </button>
      <button
        onClick={() => {
          setFormShow((prev) => !prev);
        }}
        className="bg-amber-500 cursor-pointer p-5"
      >
        Edit
      </button>
      <button
        onClick={() => {
          deleteData(user.id);
        }}
        className="bg-red-500 cursor-pointer p-5"
      >
        Delete
      </button>
    </div>
    </>
  );
};

export default User;
