import React, {useEffect,useState} from 'react';
import '../App.css'

const HomePage = ()=>{
const [recipe,setRecipe] = useState('');
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


return(

    <>
<h1 className='text-[2em]'>Recipe</h1>
{recipe?(recipe.items.map((item)=>(<>
<div key={item.id} className='bg-indigo-100 flex flex-col w-[60%] hover:cursor-pointer overflow-hidden hover:shadow-[10px_20px_10px_rgba(90,90,90)] md:w-[500px] lg:w-[600px]  sm:w-[400px]  rounded-lg pb-8 hover:scale-105 items-center justify-center '>
<h3 className='text-[2em]'>{item.title}</h3>

<p className='text-center text-[1.2em] italic'>{item.summary}</p>
<img src={`${item.image}`} className='w-10/12 rounded-lg ' alt={`${item.title} picture`} />

</div>
</>))):'loading'}
    </>
)
    
}

export default HomePage;