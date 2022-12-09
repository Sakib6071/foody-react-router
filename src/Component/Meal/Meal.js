import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = (props) => {
const {strMeal,strMealThumb,strArea,idMeal}=props.meal
const navigate = useNavigate()
const showDetail =()=>{
    const path = `/detail/${idMeal}`
    navigate(path)
}
    return (
        <div className='bg-gray-200 p-3 rounded-lg'>
           <img className='w-50 rounded-lg' src={strMealThumb} alt="foodImage" />
           <p className='text-2xl text-start my-2 font-bold'>{strMeal}</p> 
           <p className='text-xl text-start font-semibold mb-3'>{strArea} Food</p>
           <div className='grid col-span-2'>
            <button className='my-1 px-5 py-2 rounded-xl align-middle justify-center bg-slate-700 text-white text-xl' onClick={showDetail}>
                Details
            </button>
            <Link to={'/detail/'+idMeal} className='px-5 py-2 rounded-xl align-middle justify-center bg-red-700 text-white text-xl my-1'>Details</Link>
           </div>
        </div>
    );
};

export default Meal;