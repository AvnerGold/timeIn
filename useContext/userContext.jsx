import { createContext,useState,useEffect } from "react";
import allUsers from "../data/users.json"

export const UsersContext = createContext();

export default function UsersContextProvider({children}){
    //useState all users 
    const [users,SetUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [current,SetCurrent] = useState([]);
    //func to extract the users
    const LoadUsers = async () => {
        try {
            SetUsers(allUsers);
        } catch (error) {
            console.error("LoadUsers ERROR ",error);
        }
    }

    //first load give me all the users.json
    useEffect(() => {     
        LoadUsers();       
    },[])

    const value = {
        users,
        formData,
        current,
        SetUsers,
        setFormData,
        SetCurrent,
    }

    return(
        <UsersContext.Provider value={value}>
        {children}
        </UsersContext.Provider>
    )
}