import axios from 'axios'
import apiUrl from '../apiConfig'

export const createListing = (title, content, user) => {
  return axios.listing(
    `${apiUrl}/listings`,
    { listing: { title, content } },
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const indexListings = (user) => {
  return axios.get(`${apiUrl}/listings`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

export const indexMyListings = (user) => {
  return axios.get(`${apiUrl}/mylistings`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showListing = (id, user) => {
  return axios.get(`${apiUrl}/listings/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteListing = (id, user) => {
  return axios.delete(`${apiUrl}/listings/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateListing = (id, title, content, user) => {
  return axios.patch(
    `${apiUrl}/listings/${id}`,
    { listing: { title, content } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
