import React, { useState } from "react";

// pass in props
function ListingCard({ listing, onDeleteListing }) {
  // state hook for favoriting
  const [isFavorited, setIsFavorited] = useState(false)

  // destructure props
  const { id, image, description, location } = listing

  // fetch delete request
  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => onDeleteListing(id))
    console.log('deleted')
  }

  // pass down props
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
          // add inline callback function to change the state
            onClick={() => setIsFavorited(false)}
            className="emoji-button favorite active">★</button>
        ) : (
          <button
            onClick={() => setIsFavorited(true)}
            className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        {/* add inline callback function to handle delete */}
        <button 
          onClick={handleDelete}
          className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
