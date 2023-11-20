import React from 'react';
import {useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    const {id}=useParams()
    const caterogiseData=useLoaderData()
    console.log(caterogiseData);
   
    return (
        <div>
           {
              id && <h1>This is Category ID: {id}</h1>
           }
            {
                id && <h1> Total News: {caterogiseData.length}</h1>
            } 
            {
                caterogiseData.map(news=>
                     <NewsCart 
                     key={news.id}
                     news={news}
                     >
                     </NewsCart>)
            }

        </div>
    );
};

export default Category;