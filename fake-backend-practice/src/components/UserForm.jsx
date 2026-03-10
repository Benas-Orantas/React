import { useForm } from "react-hook-form";
import postData from "../services/post"

const UserForm = ({fetchUsers}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      color: "",
      weapon: "",
      hobbies: [],
      password: "",
    },
  });

  const submitHandler = (formData) => {
    postData(formData);
    fetchUsers();
    reset();
  };

  const { username, email, color, weapon, hobbies } = watch();

  return (
    <form onSubmit={handleSubmit(submitHandler)} noValidate>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          className="border border-gray-500"
          type="text"
          id="username"
          name="username"
          {...register("username", {
            required: "Username is required",
            maxLength: { value: 10, message: "name is TOO LONG" },
          })}
        />
      </div>
      <div className="text-red-500">{errors.username?.message}</div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="border border-gray-500"
          type="text"
          id="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email address",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@gmail.com" || "Enter a different email"
                );
              },
              notBlacklisted: (fieldValue) => {
                return ( !fieldValue.endsWith("bademail.com") ||
                  "This email is not valid");
              },
            },
          })}
        />
      </div>
      <div className="text-red-500">{errors.email?.message}</div>
      <div>
        <label>
          Favorite Color:
          <select {...register("color")}>
            <option value="">Select a Color</option>
            <option value="Red">Red</option>
            <option value="Pink">Pink</option>
            <option value="Purple">Purple</option>
            <option value="Blue">Blue</option>
            <option value="Light Blue">Light Blue</option>
            <option value="Cyan">Cyan</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
          </select>
        </label>
      </div>
      <div>
        <p>Pick a weapon:</p>
        <label>
          <input
            type="radio"
            value="Sword"
            {...register("weapon")}
          />
          Sword
        </label>
        <label>
          <input
            type="radio"
            value="Axe"
            {...register("weapon")}
          />
          Axe
        </label>
        <label>
          <input
            type="radio"
            value="Spear"
            {...register("weapon")}
          />
          Spear
        </label>
      </div>
      <div>
        <p>Select your favorite passtimes/hobbies</p>
        <label>
          <input
            type="checkbox"
            id="games"
            name="games"
            value="Games"
            {...register("hobbies")}
          />
          Video Games
        </label>
        <label>
          <input
            type="checkbox"
            id="reading"
            name="reading"
            value="Reading"
            {...register("hobbies")}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            id="sports"
            name="sports"
            value="Sports"
            {...register("hobbies")}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            id="cooking"
            name="cooking"
            value="Cooking"
            {...register("hobbies")}
          />
          Cooking
        </label>
        <label>
          <input
            type="checkbox"
            id="varts"
            name="varts"
            value="Visual Arts"
            {...register("hobbies")}
          />
          Visual Arts
        </label>
        <label>
          <input
            type="checkbox"
            id="music"
            name="music"
            value="Music"
            {...register("hobbies")}
          />
          Making Music
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            className="border border-gray-500"
            type="password"
            id="password1"
            name="password1"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        <div className="text-red-500">{errors.password?.message}</div>
        <label>
          Confirm Password:
          <input
            className="border border-gray-500"
            type="password"
            id="password2"
            name="password2"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => {
                return value === getValues("password") || "Passwords do not match";
              },
            })}
          />
        </label>
        <div className="text-red-500">{errors.confirmPassword?.message}</div>
      </div>
      <input
        className="bg-green-500 p-2 cursor-pointer"
        type="submit"
        value="Submit"
      />
      <div>
        <p>Form data:</p>
        {username && <p>Username: {username}</p>}
        {email && <p>Email: {email}</p>}
        {color && <p>Color: {color}</p>}
        {weapon && <p>Weapon: {weapon}</p>}
        {hobbies.length > 0 && <p>Hobbies: {hobbies}</p>}
      </div>
    </form>
  );
};

export default UserForm;
