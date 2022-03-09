import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import ListingForm:
import ListingForm from './ListingForm'
import { createListing } from '../../api/listings'

const ListingCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createListing(title, content, user)
      setCreatedId(res.data.listing._id)

      msgAlert({
        heading: 'Listing Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to make listing',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if listing has been created, Navigate to the 'show' page
    return <Navigate to={`/listings/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Listing</h3>
        <ListingForm
          handleSubmit={handleSubmit}
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={ setContent }
        />
      </div>
    </div>
  )
}

export default ListingCreate
