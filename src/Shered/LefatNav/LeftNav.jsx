import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from '../../Shered/Maps/GoogleMaps';
const LeftNav = () => {

    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=>setCategories(data))
    }, [])


    return (
        <div>
            <h1> All Category</h1>
            {
               categories.map(data=> 
                <p key={data.id}> 
                 <Link to={`/categories/${data.id}`} className='text-decoration-none'>{data.name}</Link>
                </p>
                ) 
            }
              <GoogleMaps></GoogleMaps>
        </div>
    );
};

export default LeftNav;