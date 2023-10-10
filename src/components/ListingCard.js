import React, {useState} from "react";

function ListingCard({id, description, location, image, oneListing, onRemoveListing}) {
  //LikeButton State and Function
  const [likeButton, setLikeButton] = useState(false)
  const handleLikeButton = () => {
    setLikeButton(!likeButton)
  }

  //DeleteButton State and Function
  const handleDeleteButton = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => onRemoveListing(id));
  }



  return (
    <li key={id}className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">{likeButton ? (<button onClick={handleLikeButton} className="emoji-button favorite active">★</button> ) : (<button onClick={handleLikeButton} className="emoji-button favorite">☆</button>)}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteButton} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
