import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm";

function ListingsContainer({ search }) {
  // set up array of listings
  const [listings, setListings] = useState([])
  const [sortBy, setSortBy] = useState('')

  // set up useEffect hook to show listings when page renders
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((listings) => setListings(listings))
  }, [])

  // set up function to delete listing
  const handleDeleteListing = (id) => {
   const updatedListingsArray = listings.filter((listing) => listing.id !== id)
   // trigger the re-render by calling set state
   setListings(updatedListingsArray)
  }

  const handleAddListing = (newListing) => {
    const updatedListingsArray = [...listings, newListing]
    console.log(updatedListingsArray)
    setListings(updatedListingsArray)
  }

  // create new array uses the state hook for search variable
  // render listing cards on site based on array of listings
  // map over filtered listing array
  const listingCards = listings
  .filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
  .sort((listingA, listingB) => {
    if (sortBy === 'id') return listingA.id - listingB.id
    else return listingA.location.localeCompare(listingB.location)
  })
  .map((listingObj) => 
    <ListingCard 
      key={listingObj.id} 
      listing={listingObj} 
      // pass as property to child component
      onDeleteListing={handleDeleteListing}
    />)

  return (
    // advanced deliverables: sort alphabetically and add new listing
    <main>
      <NewListingForm onAddListing={handleAddListing} />
      <button onClick={() => setSortBy('id')}>Sort By Default</button>
      <button onClick={() => setSortBy('location')}>Sort By Location</button>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
