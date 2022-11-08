import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
  
   const createUseremail=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);

    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }

    },[])
    const logout=()=>{
        return signOut(auth);
    }
    const signingoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);

    }
    const signingitpop=()=>{
        setLoading(true);
        return signInWithPopup(auth,gitProvider);
    }
    const updateuserInfo =(profile)=>{
        console.log(profile)
        return updateProfile(auth.currentUser,profile);
    }

    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);

    const authInfo={user,loading,createUseremail,signIn,logout,signingoogle,signingitpop,updateuserInfo}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default UserContext;

