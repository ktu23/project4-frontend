import apiUrl from '../apiConfig'
import axios from 'axios'

export const createComment = (body) => {
  return axios({
    url: apiUrl + '/comments/',
    method: 'POST',
    data: {
      comment: {
        text: body.text,
        owner: body.owner
      }
    }
  })
}

export const changeComment = (id, text) => {
  return axios({
    url: apiUrl + `/comments/${id}`,
    method: 'PATCH',
    data: {
      comment: {
        text
      }
    }
  })
}

export const deleteComment = (id, user) => {
  return axios({
    url: apiUrl + `/comments/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${user.token}` }
  })
}
