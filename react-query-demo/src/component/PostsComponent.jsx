import { QueryClient,QueryClientProvider,useQuery } from "react-query";
function PostsComponent(){
    const {isPending,error,data} = useQuery({
        queryKey:['repoData'],
        queryFn:()=>
            fetch(' https://jsonplaceholder.typicode.com/posts').then((res)=>res.json(),),
    })

    if(isPending) return 'Loading...'
    if(error) return 'An error has occurred'
    console.log(data)
    return(
        <>
        <h1>Something</h1>
        {data.slice(0,3).map(items=>(
            <>

            <p>{items.userId}</p><p>{items.title}</p>
            </>
        ))}
        </>
    )
}
export default PostsComponent;