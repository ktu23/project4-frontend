import axios from 'axios'
import apiUrl from '../apiConfig'

export const createListing = (title, content, user) => {
  return axios.post(
    `${apiUrl}/posts`,
    { post: { title, content } },
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const indexListings = (user) => {
  return axios.get(`${apiUrl}/posts`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

export const indexMyListings = (user) => {
  return axios.get(`${apiUrl}/myposts`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showListing = (id, user) => {
  return axios.get(`${apiUrl}/posts/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteListing = (id, user) => {
  return axios.delete(`${apiUrl}/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateListing = (id, title, content, user) => {
  return axios.patch(
    `${apiUrl}/posts/${id}`,
    { post: { title, content } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
