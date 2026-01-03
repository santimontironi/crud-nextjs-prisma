"use client"
import { createContext, useState } from "react"
import { loginUser, registerUser } from "@/services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState({
        login: false,
        register: false
    });

    async function login(credentials){
        setLoading(prev => ({...prev, login: true}))
        try{
            const res = await loginUser(credentials);
            setUser(res.user);
        }
        catch(error){
            console.log("Error al iniciar sesión:", error);
        }
        finally{
            setTimeout(() => {
                setLoading(prev => ({...prev, login: false}))
            },2500)
        }
    }

    async function register(data){
        setLoading(prev => ({...prev, register: true}))
        try{
            const res = await registerUser(data);
            setUser(res);
        }
        catch(error){
            console.log("Error al registrar el usuario:", error);
        }
        finally{
            setTimeout(() => {
                setLoading(prev => ({...prev, register: false}))
            },2500)
        }
    }


    return <UserContext.Provider value={{user, loading, login, register}}>
        {children}
    </UserContext.Provider>
}