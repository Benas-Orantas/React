import axios from "axios"
import {getOne} from "./get"

const API_URL = import.meta.env.VITE_API_URL

export const deleteData = async (id) => {
    const user = await getOne(id)

    const confirmed = window.confirm(`Are you sure you want to delete user: ${user.username}`);
    if (!confirmed) return;

    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data;
}

export default deleteData