/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Home from './components/listings/Home'
import Listing from './components/listings/Listing'
import ListingCreate from './components/listings/ListingCreate'
import ListingEdit from './components/listings/ListingEdit'
import Listings from './components/listings/Listings'
import MyListings from './components/listings/MyListings'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  const deleteAlert = id => {
    setMsgAlerts(msgAlerts => msgAlerts.filter(msg => msg.id !== id))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />

          <Route path='/'
            element={<Home />} />
          <Route path='/listings' element={<Listings msgAlert={msgAlert} user={user} />} />
          <Route path='/listings' element={<Listings msgAlert={msgAlert} user={user} />} />
          <Route path='/mylistings' element={<MyListings msgAlert={msgAlert} user={user}/>} />
          <Route path='/listings/:id' element={<Listing msgAlert={msgAlert} user={user} />} />
          <Route path='/listings/create' element={<ListingCreate msgAlert={msgAlert} user={user} />} />
          <Route path='/listings/:id/edit' element={<ListingEdit msgAlert={msgAlert} user={user} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
