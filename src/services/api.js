import axios from "axios";

const apiUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

export const addTask = async (task) => {
    return await apiUrl.post('/tasks', task);
}

export const getTasks = async () => {
    const response = await apiUrl.get('/tasks');
    return response.data;
}