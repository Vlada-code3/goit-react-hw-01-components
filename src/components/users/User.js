import React from "react";

const User = ({ user }) => {
  return (
    <>
      <h2>{user.name}</h2>

      <p>{user.tag}</p>
      <p>{user.location}</p>
      <img src={user.avatar} alt={user.name} />
      <ul>
        <li>followers: {user.stats.followers}</li>
        <li>views: {user.stats.views}</li>
        <li>likes: {user.stats.likes}</li>
      </ul>
    </>
  );
};

export default User;
