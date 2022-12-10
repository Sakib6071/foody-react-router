import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealID} = useParams() 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`

    const [detail, setDetail]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data.meals[0]))
    },[])

    return (
        <div>
            <div className='md:w-1/2 mx-auto my-10 p-10 bg-slate-200 rounded-xl'>
                <h1 className='text-4xl md:text-6xl font-bold my-5'>Food Details</h1>
            <img className='rounded-xl inline-block align-middle justify-center w-3/4 ' src={detail.strMealThumb} alt="" />
            <p className='text-3xl md:text-5xl mt-3 bg-yellow-500 py-2 rounded-lg'>{detail.strMeal}</p>
            <p className='text-2xl md:text-4xl my-2 bg-yellow-400 py-2 rounded-lg'>{detail.strArea} Food</p>
            <p className='text-xl text-justify'> <span className='text-xl md:text-3xl font-bold'>How to Cook :</span> {detail.strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetail;