const AddRecipe = ()=>{
    const {recipeTitle,setRecipeTitle} = useState("");
    const {recipeImage,setRecipeImage} = useState('')
    const {ingredients,setRecipeIngredients} = useState('')

    function submitData(){

    }
    return(
        <>
        <form onSubmit={submitData}>
        <label htmlFor="recipe-title">
            Input Recipe Title
        </label>
        <input type="text" name="recipe-title" />


        <label htmlFor="recipe-title">
            Input Recipe Title
        </label>
        <input type="text" name="recipe-title" />


        <label htmlFor="recipe-title">
            Input Recipe Title
        </label>
        <input type="text" name="recipe-title" />
         </form>
        </>
    )
}
export default AddRecipe;