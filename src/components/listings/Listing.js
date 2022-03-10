// import React, { useState, useEffect } from 'react'
// import { Link, Navigate, useParams } from 'react-router-dom'
// import { Spinner, Button } from 'react-bootstrap'

// import { deleteListing, showListing } from '../../api/listings'

// const Listing = ({ user, msgAlert }) => {
//   const [listing, setListing] = useState(null)
//   const [deleted, setDeleted] = useState(false)
//   const { id } = useParams()

//   // if user is null, redirect to home page
//   // Note: Must check before useEffect, since it needs user

//   useEffect(() => {
//     // When using async & await in a `useEffect` function
//     // We have to wrap our `async` code in a function:
//     // https://stackoverflow.com/a/53572588
//     const fetchData = async () => {
//       try {
//         const res = await showListing(id)
//         setListing(res.data.listing)
//       } catch (error) {
//         msgAlert({
//           heading: 'Listing failed to load',
//           message: error.message,
//           variant: 'danger'
//         })
//       }
//     }
//     fetchData()
//   }, [])
//   const handleDeleteClick = async () => {
//     try {
//       await deleteListing(id, user)
//       setDeleted(true)
//     } catch (error) {
//       msgAlert({
//         heading: 'Failed to delete the listing',
//         message: error.message,
//         variant: 'danger'
//       })
//     }
//   }

//   // 3 states:
//   // If listing is `null`, we are loading
//   if (!listing) {
//     return (
//       <Spinner animation='border' role='status'>
//         <span className='visually-hidden'>Loading...</span>
//       </Spinner>
//     )
//   } else if (deleted) {
//     return <Navigate to='/listings' />
//   } else if (user) {
//     if (user._id !== listing.owner) {
//       // console.log(user._id)
//       // console.log(listing.owner)
//       // We have a listing, display it!
//       return (
//         <div className='row'>
//           <div className='col-sm-10 col-md-8 mx-auto mt-5'>
//             <h3>{listing.title}</h3>
//             <p>{listing.content}</p>
//           </div>
//         </div>
//         // ** add comment component ? **
//       )
//     } else {
//       // We have a listing, display it!
//       return (
//         <div className='row'>
//           <div className='col-sm-10 col-md-8 mx-auto mt-5'>
//             <h3>{listing.title}</h3>
//             <p>{listing.content}</p>
//             <Button variant='danger' onClick={handleDeleteClick}>
// Delete Listing
//             </Button>
//             <Link to={`/listings/${id}/edit`}>
//               <Button variant='primary' type='submit'>
// Update Listing
//               </Button>
//             </Link>
//           </div>
//         </div>
//       )
//     }
//   } else {
//     // Unauthenticated View
//     return (
//       <div className='row'>
//         <div className='col-sm-10 col-md-8 mx-auto mt-5'>
//           <h3>{listing.title}</h3>
//           <p>{listing.content}</p>
//         </div>
//       </div>
//     )
//   }
// }

// export default Listing

import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteListing, showListing } from '../../api/listings'

const Listing = ({ user, msgAlert }) => {
  const [listing, setListing] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showListing(id, user)
        setListing(res.data.post)
      } catch (error) {
        msgAlert({
          heading: 'Listing failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteListing(id, user)
      setDeleted(true)

      msgAlert({
        heading: 'Listing Deleted',
        message: 'Deleted successfully',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete listing',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If listing is `null`, we are loading
  if (!listing) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/listings' />
  } else {
    // We have a listing, display it!
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{listing.title}</h3>
          <p>Listing Content: {listing.content}</p>
          <Button variant='danger' onClick={handleDeleteClick}>Delete Listing</Button>
          <Link to={`/listings/${id}/edit`}>
            <Button variant='primary' type='submit'>Update Listing</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Listing
