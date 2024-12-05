import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    console.log(user)

    // register new user
    const createNewUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const userLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOutUser,
        userLogin,
        loading,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;