import React from 'react';

const Preview = ({ user }) => {
    if (!user) {
        return <div>No user data</div>;
    }

    return (
        <div className="user-preview">
            <img src={user.avatar_url} alt={`${user.login} avatar`} />
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                </a>
            </p>
            <ul>
                <li>Followers: {user.followers}</li>
                <li>Following: {user.following}</li>
                <li>Public Repos: {user.public_repos}</li>
            </ul>
        </div>
    );
};

export default Preview;