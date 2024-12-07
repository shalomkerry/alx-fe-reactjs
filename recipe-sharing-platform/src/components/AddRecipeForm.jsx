import { useState } from "react";

const AddRecipe = ()=>{
    const[recipeTitle,setRecipeTitle] = useState("");
    const {recipeImage,setRecipeImage} = useState('')
    const {ingredients,setRecipeIngredients} = useState('')

    function submitData(e){
e.preventDefault();
console.log(recipeTitle)
    }
    return(
        <>
        <form onSubmit={submitData} className="flex flex-col">
        <label className="border-red-700" htmlFor="recipe-title">
            Input Recipe Title
        </label>
        <input type="text" name="recipe-title" className="bg-gray-700  text-white" value={recipeTitle}onChange={(e)=>setRecipeTitle(e.target.value)}/>
        <input type="submit" className="bg-black text-red-300" value='submit' />
         </form>
        </>
    )
}
export default AddRecipe;