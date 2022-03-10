// import React, { useState, useEffect } from 'react'
// import { Navigate, useParams } from 'react-router-dom'

// import ListingForm from './ListingForm'
// import { showListing, updateListing } from '../../api/listings'

// const ListingEdit = ({ user, msgAlert }) => {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   const [updated, setUpdated] = useState(false)
//   const { id } = useParams()

//   // if user is null, redirect to home page
//   // Note: Must check before useEffect, since it needs user
//   if (!user) {
//     return <Navigate to='/' />
//   }

//   useEffect(() => {
//     // When using async & await in a `useEffect` function
//     // We have to wrap our `async` code in a function:
//     // https://stackoverflow.com/a/53572588
//     const fetchData = async () => {
//       try {
//         const res = await showListing(id, user)
//         setTitle(res.data.listing.title)
//         setContent(res.data.listing.content)
//       } catch (error) {
//         msgAlert({
//           heading: 'Failed to load listing',
//           message: error.message,
//           variant: 'danger'
//         })
//       }
//     }
//     fetchData()
//   }, [])

//   const handleSubmit = async event => {
//     event.preventDefault()

//     try {
//       await updateListing(id, title, content, user)
//       setUpdated(true)
//     } catch (error) {
//       msgAlert({
//         heading: 'Failed to update listing',
//         message: error.message,
//         variant: 'danger'
//       })
//     }
//   }

//   if (updated) {
//     // Navigate to the 'show' page
//     return <Navigate to={`/listings/${id}`} />
//   }

//   return (
//     <div className='row'>
//       <div className='col-sm-10 col-md-8 mx-auto mt-5'>
//         <h3>Edit Listing</h3>
//         <ListingForm
//           handleSubmit={handleSubmit}
//           title={title}
//           content={content}
//           setTitle={setTitle}
//           setContent={setContent}
//         />
//       </div>
//     </div>
//   )
// }

// export default ListingEdit

import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import ListingForm from './ListingForm'
import { showListing, updateListing } from '../../api/listings'

const ListingEdit = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [updated, setUpdated] = useState(false)
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
        setTitle(res.data.post.title)
        setContent(res.data.post.content)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load listing',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateListing(id, title, content, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update listing',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/listings/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Listing</h3>
        <ListingForm
          handleSubmit={handleSubmit}
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
        />
      </div>
    </div>
  )
}

export default ListingEdit
