import React, { useState, createContext } from 'react'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'
import './Header.css'

const UserContext = createContext();

const Header = () => {

    const [user, setUser] = useState()

  const updateUser = (value) => {
    setUser(value)
  }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            <HeaderNavigation/>   
        </UserContext.Provider>
    )
}

export default Header
