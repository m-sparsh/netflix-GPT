import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Browse = () => {
  const user = useSelector(store => store.user);
  return (
    <div>
      <Header />
      <h1>{user.displayName ? user.displayName: "Guest"}</h1>
    </div>
  )
}

export default Browse