import React, { useEffect, useState } from 'react';
import  { createContext} from 'react';
import {  useParams } from 'react-router-dom';

export const AuthContext= createContext(null)

const AuthProvaiders = ({children}) => {

    const [categories, setCategories]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/categories/${params.id}`)
        .then(res=> res.json())
        .then(data=>setCategories(data))
    }, [])

    const authInfo={
        categories
       }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    );
}; 

export default AuthProvaiders;