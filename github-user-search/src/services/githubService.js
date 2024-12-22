import axios from 'axios';
const fetchUserData = async (userName) => {

    const token = REACT_APP_GITHUB_API_KEY;

    try {
        const response = await axios.get(`https://api.github.com/users/${userName}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub user:', error);
        throw error;
    }
};

export default fetchUserData;