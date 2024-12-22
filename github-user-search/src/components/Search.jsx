import fetchUserData from "../services/githubService";
import userNameStore from "../stores/userName";

const Search = (){


 const [userData, setUserData] = useState(null);
 
const userName= userNameStore((state)=>state.userName)
const setUserName= userNameStore((state)=>state.setUserName)
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); 
      try {
        const data = await fetchUserData(userName);
        setUserData(data);
        setError(null);
      } catch (err) {
        setError("Looks like we cant find the user");
      } finally {
        setLoading(false); 
      }
    };
       getData();
  }, [userName]);

  const handleChange = (e)=>{
    setUserName(e.target.value)
  }
const handleSubmit = async(e) => {
  e.preventDefault();
  console.log(userName)
if(userName !==''){
let data = await fetchUserData(userName);
setUserData(data)


 return data; 
}
}
  if (loading) return <p>Loading data, please wait...</p>; // Or use a spinner
  if (error) return <p>{error}</p>;
  return (
    <>


    
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <label htmlFor="text">Enter User Name</label>
     <input type="text" value={userName} onChange={handleChange}/>
     <button type='submit'>submit</button>
    </form>
        {/* <PreviewName/> */}
{userData&&(
  <>
   <div className="user-preview">
            <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                </a>
            </p>
            <ul>
                <li>Followers: {userData.followers}</li>
                <li>Following: {userData.following}</li>
                <li>Public Repos: {userData.public_repos}</li>
            </ul>
          <a href="/">Return Home</a>
            {console.log(userData)}
        </div>
  </>
)}
</>
  )
}