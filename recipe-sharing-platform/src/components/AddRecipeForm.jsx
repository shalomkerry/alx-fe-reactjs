import { useState,useEffect } from "react";
const AddRecipe = ()=>{
    const[inputFields, setInputFields] = useState({
        title:'',
        image:'',
        recipe:''
    })
  const [errors, setErrors] = useState({})
  const[submitting,setSubmitting] = useState(false)


function validate(inputValues){
let errors = {}
if(inputValues.title.length<3){
    errors.title = "Food name can't be less than 3 word "
}
if(inputValues.image.length<12){
    errors.image = 'link to small'
}
if(inputValues.recipe.length<10){
    errors.recipe = 'food recipe small'
}
return errors
}
const handleChange = (e)=>{
    setInputFields({...inputFields,[e.target.name]:e.target.value})
}
    function handleSubmit(event){
event.preventDefault();
setErrors(validate(inputFields))
setSubmitting(true)
    }
    const finishSubmit = ()=>{
        console.log(inputFields)
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && submitting){
            finishSubmit();
        }
    },[errors])
    return(
        <>
        {Object.keys(errors).length ===0 && submitting?(
            <span>Successfully submitted</span>
        ):null}
        <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="border-red-700" for="title">
            Input Recipe Title
        </label>
        <input type="text" name="title" className="bg-gray-700  text-white" value={inputFields.title} onChange={handleChange}  />
{errors.title? (
    <p className="text-red-700">Title can't be 3 letters</p>
):null}
        <label className="border-red-700" for="image">
            Input Recipe Image Link
        </label>
        <input type='text' name="image" className="bg-gray-700  text-white" onChange={handleChange} value={inputFields.image} />

{errors.image? (
    <p className='text-red-700'>Link can't this small</p>
):null}

    <label className="border-red-700" for="recipe">
            Input Recipe 
        </label>
        <input type="text" name="recipe" className="bg-gray-700  text-white" value={inputFields.recipe}onChange={handleChange}  />

{errors.recipe? (
    <p className='text-red-700'>This can't be</p>
):null}
        <button type="submit" >Submit</button>
         </form>
        </>
    )
}
export default AddRecipe;