"use client"
import { createContext, useState } from "react"
import { addTask } from "@/services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState({
        add: false,
        delete: false,
        get: true,
        patch: false
    })

    async function createTask(task){
        setLoading({...loading, add: true});
        try{
            const taskAdded = await addTask(task);
            setTasks([...tasks, taskAdded.data]);
            return taskAdded;
        }
        catch(error){
            throw error;
        }
        finally{
            setLoading({...loading, add: false});
        }
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, loading}}>
            {children}
        </TaskContext.Provider>
    )
}