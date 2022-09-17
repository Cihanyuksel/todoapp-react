import { useEffect } from "react";
import { createContext , useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || false)
    const userData = {
        user,
        setUser
    }
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return(
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
