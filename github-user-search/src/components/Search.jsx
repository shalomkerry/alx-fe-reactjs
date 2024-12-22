import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";
import userNameStore from "../stores/userName";

const Search = () => {
  const [userData, setUserData] = useState(null);
  const userName = userNameStore((state) => state.userName);
  const setUserName = userNameStore((state) => state.setUserName);
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

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName !== "") {
      const data = await fetchUserData(userName);
      setUserData(data);
      return data;
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading data, please wait...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">
          Enter User Name
        </label>
        <input
          type="text"
          value={userName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="GitHub Username"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full"
        >
          Submit
        </button>
      </form>
    {/* {userData.map} */}
      {userData && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96 text-center">
          <img
            src={userData.avatar_url}
            alt={`${userData.login} avatar`}
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">{userData.name || "No Name Provided"}</h2>
          <p className="text-gray-600">{userData.bio || "No bio available"}</p>
          <p className="mt-4">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View GitHub Profile
            </a>
          </p>
          <ul className="mt-4 text-left">
            <li className="text-gray-700">
              <strong>Followers:</strong> {userData.followers}
            </li>
            <li className="text-gray-700">
              <strong>Following:</strong> {userData.following}
            </li>
            <li className="text-gray-700">
              <strong>Public Repos:</strong> {userData.public_repos}
            </li>
          </ul>
          <a
            href="/"
            className="block mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
          >
            Return Home
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
