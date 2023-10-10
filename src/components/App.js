import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [displayCards, setDisplayCards] = useState([])


  const getListingsData = () => {
    fetch("http://localhost:6001/listings")
    .then(response=>response.json())
    .then(listingData => setDisplayCards(listingData))
  }

  useEffect(getListingsData, [])

  const handleRemoveListing = (id) => {
    const newListings = displayCards.filter((listing) => listing.id !== id)
    setDisplayCards(newListings)
    }    
  

  return (
    <div className="app">
      <Header />
      <ListingsContainer listingDataFromApp={displayCards} onRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
