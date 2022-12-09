import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {

    const [searchText, setSearchText]=useState('')
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText])
    const searchFood = e =>{   
       setSearchText(e.target.value)
    }
    return (
        <div>
            <p className='text-3xl my-3'>Find the food you want</p>
            {/* <p>{meals.length}</p> */}
            <input onChange={searchFood} className='border border-red-500 px-3 rounded-lg text-2xl' type="text" placeholder='Find Your Food' />
<div className='grid grid-cols-3 gap-20 my-20 mx-20'>
    {
    
    meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)

        
    }
</div>

        </div>
    );
};

export default Home;