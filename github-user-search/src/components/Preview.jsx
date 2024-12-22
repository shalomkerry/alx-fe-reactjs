import React from 'react';
import fetchUserData from '../services/githubService';
import userNameStore from '../stores/userName';
const Preview =  () => {
   let userName = userNameStore((state)=>state.userName)
   const fetchData = async(userName)=>{
   let data = await fetchUserData(userName)
   return data
   } 
   let data = fetchData(userName)
   console.log(data) 
   if (!data) {
        return <div>No user data</div>;
    }
    return (
        <div className="user-preview">
            <img src={data.avatar_url} alt={`${data.login} avatar`} />
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
            <p>
                <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                </a>
            </p>
            <ul>
                <li>Followers: {data.followers}</li>
                <li>Following: {data.following}</li>
                <li>Public Repos: {data.public_repos}</li>
            </ul>
            <a href="/">Return Home</a>
            {console.log(data)}
        </div>

    );
};

export default Preview;