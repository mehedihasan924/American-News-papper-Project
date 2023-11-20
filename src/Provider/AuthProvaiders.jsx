import React, { useEffect, useState } from 'react';
import  { createContext} from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config'
export const AuthContext= createContext(null)


const auth =getAuth(app)
const AuthProvaiders = ({children}) => {

   const user={ displayName: "Mehedi Hasan "}
    const authInfo={
        user
       }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    );
}; 

export default AuthProvaiders;