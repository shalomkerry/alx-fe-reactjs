import React from "react";
import { useQuery } from "@tanstack/react-query";
const fetchPosts = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok) throw new Error('something');
    return response.json();
}
   
function PostsComponent(){
    
    // const {isPending,error,data} =useQuery({
    //     queryKey:['posts'],
    //     queryFn:()=>fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()),
    // })
    const {isPending,error,data} = useQuery({
        queryKey:['posts'],
        queryFn:fetchPosts,

    })

if(isPending) return    <div>'Loading...'</div>
    if(error) return <div>'Error:{error.message}</div> 
 console.log(data)
    return(
        <>
        <h1>Posts</h1>
    {data.slice(0,3).map(item=>(
<>
<h2>{item.userId}</h2>
<h3>{item.title}</h3>
<p>{item.body}</p>

</>
    ))}
        </>
    )
}
export default PostsComponent;