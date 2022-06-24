import React from 'react'
import { Link } from 'react-router-dom'
import ReactQueryLogo from "../graphics/ReactQuery-logo.svg"
import AxiosLogo from "../graphics/Axios-logo.svg"

export default function Navbar() {

  return (
    <div className='Navbar'>
        <Link to="/axios"> <img src={AxiosLogo} alt="Axios Logo"/> </Link>
        <Link to="/reactquery"> <img src={ReactQueryLogo} alt="React Query Logo"/></Link>
    </div>
  )
}
