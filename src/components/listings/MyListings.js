import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexMyListings } from '../../api/listings'

const MyListings = ({ user, msgAlert }) => {
  const [listings, setListings] = useState(null)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  // Run once, when the component mounts
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await indexMyListings(user)
        setListings(res.data.listings)
      } catch (error) {
        msgAlert({
          heading: 'Listings failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  // If listings are `null`, we are loading
  if (!listings) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  // Otherwise, display the listings
  const listingsList = listings.map(listing => (
    <li key={listing._id}>
      <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
    </li>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Your Listings</h3>
        <ul>{listingsList}</ul>
      </div>
    </div>
  )
}

export default MyListings
