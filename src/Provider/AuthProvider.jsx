import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from "prop-types"

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader]= useState(true)

// Register User 
const createUser =(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login User 
const loginUser = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}

//Manage User 
useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoader(false)
    })

    return ()=>{unSubscribe}

} , [])

// Sign out 
const logOut = ()=>{
    return signOut(auth)
}






    const authInfo ={
        createUser,
        loginUser,
        user,
        logOut,
        loader
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;