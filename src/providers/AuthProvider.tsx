import React, {createContext, useState} from "react";

type IAuthProvider = {
    userName: string,
    setUserName: (userName: string) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    email:string,
    setEmail: (email: string) => void
}

const AuthContext = createContext<IAuthProvider | null>(null);

const AuthProvider = (props: any) => {
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState(false);

    return (
        <AuthContext.Provider value={{userName, setUserName, isLoggedIn, setIsLoggedIn, email, setEmail}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext, IAuthProvider};