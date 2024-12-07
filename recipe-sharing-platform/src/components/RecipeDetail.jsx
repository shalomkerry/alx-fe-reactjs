import { useState, useEffect } from "react"
import { Link,useLocation } from "react-router-dom";

const RecipeDetail = ()=>{
    
    const location = useLocation()
    const {content} = location.state || {}

    const [recipe, setRecipe] = useState([])
useEffect(()=>{
fetch('./data.json')
.then(response=>{
    if(!response.ok){
        console.log('we have encountered an error')
    }
    return response.json()})
.then(data=> setRecipe(data))
},[]);

const renderRecipe = ()=>{



switch ( content ){
case "spaghetti":
    return (
        <>

{recipe.items?(recipe.items.filter(x=>x.name === 'spaghetti').map((item)=>(
 
<div>

<div>

    <img src={`${item.image}`} alt="" className="rounded-md mx-auto" />
<p className="text-center">{item.title}</p>
</div>
<h3 className='text-center text-2xl'>Ingredients </h3>
{item.ingredients.map((ingredients)=>(
<nav>
    <li>{ingredients.item}</li>
</nav>
))}

<div>

<h3 className="text-center text-2xl">Instructions</h3>
<ol className="list-decimal">
{item.instructions.map((ins)=>(
    <li>{ins}</li>

))
}    
</ol>
</div>
</div>
))):'loading'}   

        </>
    )
   case "chicken":
    return(
<>
{recipe.items?(recipe.items.filter(x=>x.name === 'chicken').map((item)=>(
 
<div>

<div>

    <img src={`${item.image}`} alt="" className="rounded-md mx-auto" />
<p className="text-center italic text-xl">{item.title}</p>
</div>
<div>
<h3 className='text-center text-2xl'>Ingredients </h3>
{item.ingredients.map((ingredients)=>(

    <li>{ingredients.item}</li>
))}
</div>
<div>

<h3 className="text-center text-2xl">Instructions</h3>
<ol className="list-decimal">
{item.instructions.map((ins)=>(
    <li>{ins}</li>

))
}    
</ol>
</div>
</div>
))):'loading'}   
</>
    ) 
}
}
return(
<div>

<Link to='/'>  <h3 className="text-blue-700">Go Back to Recipe List</h3>
  </Link>
<h1 className="text-4xl text-center">Recipe Page</h1>

{renderRecipe()}
</div>
)
}
export default RecipeDetail