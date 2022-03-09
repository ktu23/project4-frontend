import React from 'react'

const Home = () => (
  <h1> The most exclusive resource for top producing real estate agents. </h1>
)

export default Home

// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// import { Spinner } from 'react-bootstrap'
// import { indexListings } from '../../api/listings'

// const Home = ({ msgAlert }) => {
//   const [listings, setListings] = useState(null)

//   // Run once, when the component mounts
//   useEffect(() => {
//     // When using async & await in a `useEffect` function
//     // We have to wrap our `async` code in a function:
//     // https://stackoverflow.com/a/53572588
//     const fetchData = async () => {
//       try {
//         const res = await indexListings()
//         setListings(res.data.listings)
//       } catch (error) {
//         msgAlert({
//           heading: 'Listings failed to load',
//           message: error.message,
//           variant: 'danger'
//         })
//       }
//     }
//     fetchData()
//   }, [])

//   // If listings are `null`, we are loading
//   if (!listings) {
//     return (
//       <Spinner animation='border' role='status'>
//         <span className='visually-hidden'>Loading...</span>
//       </Spinner>
//     )
//   }

//   // Otherwise, display the listings
//   const listingsList = listings.map((listing) => (
//     <li key={listing._id}>
//       <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
//     </li>
//   ))

//   return (
//     <div className='row'>
//       <div className='col-sm-10 col-md-8 mx-auto mt-5'>
//         <h3>Listings</h3>
//         <ul>{listingsList}</ul>
//       </div>
//     </div>
//   )
// }
// export default Home
