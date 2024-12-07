import React, {useEffect,useState} from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const HomePage = ()=>{
const [recipe,setRecipe] = useState([]);
useEffect(()=>{
  fetch("./data.json")
  .then(response=>{
    if(!response.ok){
        throw new Error("not ")
    }
    return response.json();

  })
  .then(data=>setRecipe(data))  
},[]);

//grid
return(

    <>
<h1 className='text-[2em]'>Recipe</h1>
{recipe.items?(recipe.items.map((item)=>(<>

<Link to={`/recipe`} state={{content:`${item.name}`}}>
<div key={item.id} className='bg-indigo-100 flex flex-col w-[60%] hover:cursor-pointer overflow-hidden hover:shadow-[10px_20px_10px_rgba(90,90,90)] md:w-[500px] lg:w-[600px]  sm:w-[400px]  rounded-lg pb-8 mb-10 hover:scale-105 items-center justify-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
<h3 className='text-[2em]'>{item.title}</h3>

<img src={`${item.image}`} className='w-10/12 rounded-lg ' alt={`${item.title} picture`} />

</div>

</Link>
</>
))):'loading'}
<Link to='/add-recipe'>
<button >Go To Add Page</button>
</Link>
    </>
)
    
}

export default HomePage;