import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingDataFromApp, onRemoveListing}) {
  const listingsArray = listingDataFromApp.map((oneListing) => {
    return <ListingCard onRemoveListing={onRemoveListing} id={oneListing.id} oneListing={oneListing} key={oneListing.id} description={oneListing.description} location={oneListing.location} image={oneListing.image}/>
  })
  return (
    <main>
      <ul className="cards">{listingsArray}</ul>
    </main>
  );
}

export default ListingsContainer;
