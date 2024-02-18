import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <header className='py-3 header'>
        <nav className="container d-flex justify-content-between align-items-center">
           <div className="logo">
                <h2>Logo</h2>
            </div> 
            <div className='d-flex align-items-center gap-3'>
                <ul className='d-flex gap-4 align-items-center m-auto me-4'>
                    <li><Link to='/' className='ul-hover '>Home</Link></li>
                    <li><Link to='/comments' className='ul-hover'>Comments</Link></li>
                </ul>
               <Link to='/login'><button className='btn btn-primary'>Sign In</button></Link>
               <Link to='/register'> <button className='btn btn-outline-primary'>Sign Up</button></Link>
            </div>
        </nav>
    </header>
  )
}

export default HomeHeader