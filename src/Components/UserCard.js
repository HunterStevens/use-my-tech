import React from 'react';

// A card for every use that is created
function UserCard({ details, edit, remove }) {
  return (
    <div className='user-card'>
      <h2>Hello {details.username}</h2>
      <h3>{details.name}</h3>
      <p>{details.city}</p>
      <button onClick={() => edit(details.id)}>Edit Profile</button>
      <button onClick={() => remove(details.id)}>Delete Profile</button>
    </div>
  );
}

export default UserCard;
