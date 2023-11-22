import React, { useEffect, useState } from 'react';
import  { createContext} from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config'


export const AuthContext= createContext(null)
const auth =getAuth(app)


const AuthProvaiders = ({children}) => {

     const [data ,setData ] = useState();
    //  console.log({data});
      const user={name:"Mehedi Hasan"}

   const authInfo={
        data ,
        setData,
        user
    }


    return (
        <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    );
}; 

export default AuthProvaiders;