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
    const {isPending,error,data,isLoading,isError,refetch} = useQuery({
        queryKey:['posts'],
        queryFn:fetchPosts,
        cacheTime:1000,
        staleTime:1000,
        refetchOnWindowFocus:true,
        keepPreviousData:true,
        

    })

if(isPending) return    <div>'Loading...'</div>
    if(error) return <div>'Error:{error.message}</div> 
 
    return(
        <>
        <h1>Posts</h1>
        
       {data?(
        <>
            {data.slice(0,3).map(item=>(
<>
<h2 key={item.userId}>{item.userId}</h2>
<h3 key={item.title}>{item.title}</h3>
<p key={item.body}>{item.body}</p>

</>))}
        </>
       ):isError?(
        <h5>{error.message}</h5>
       ):isLoading(
        <h5>Loading</h5>
       )}
 <button onClick={()=>{
    refetch()
    }}>Refetch Data</button>
    </>
    )
}
export default PostsComponent;