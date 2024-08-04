import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <img src="/gym-logo.png" alt="" width={'150px'} height={'150px'} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" 
          style={{color:'#BA8828', fontFamily:'outfit', fontWeight:'bold', fontSize:'18px'}}>Home</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="/about" style={{color:'#BA8828', fontFamily:'outfit', fontWeight:'bold', fontSize:'18px'}}>About</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="/membership" style={{color:'#BA8828', fontFamily:'outfit', fontWeight:'bold', fontSize:'18px'}}>Membership</a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link" href="/contact" style={{color:'#BA8828', fontFamily:'outfit', fontWeight:'bold', fontSize:'18px'}}>Contact</a>
        </li>
        <li className="nav-item ms-5">
        <Link to={'/login'}>
          <button className='btn w-100' type='button' style={{backgroundColor:'rebeccapurple', color:'orange'}}>
            SignIn</button>
        </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>  
    </>
  )
}

export default Header