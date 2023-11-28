import React, { useEffect, useState } from 'react';
import  { createContext} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config'


export const AuthContext= createContext(null)
const auth =getAuth(app)


const AuthProvaiders = ({children}) => {
//Masum Vai use context
     const [data ,setData ] = useState();
    //  console.log({data});
    

    // handle load
  const [loading, setLoading]=useState(true);
 
  //  Authentication Suystem
      const [user, setUser]=useState(null)
     
      const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut=()=>{ 
        setLoading(true);
        return signOut(auth);
        
      }

// User ase kina check and state set

useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
      console.log("logged user inside auth state obseever" , loggedUser);
      setUser(loggedUser)
      setLoading(false);
     })
     return()=>{
        unsubscribe();
     }
}, [])

   const authInfo={
        data ,
        setData,
        user,
        loading,
        createUser,
        signIn,
        logOut,
       
    }


    return (
        <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    );
}; 

export default AuthProvaiders;