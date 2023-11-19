import React from 'react';
import {useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    const {id}=useParams()
    const caterogiseData=useLoaderData()
    console.log(caterogiseData);
   
    return (
        <div>
            <h1>This is ID: {id}</h1>
            <h1>: {caterogiseData.length}</h1>
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