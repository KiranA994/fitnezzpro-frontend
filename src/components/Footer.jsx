import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div style={{backgroundColor:'#e7b076c2'}} className='mt-5'>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <div>
        <img src="/footer-logo.png" alt="" className='w-50' />
      </div>
      <div>
        <p style={{color:'#D02E2E',fontFamily:'outfit',fontSize:'20px'}}>Address</p>
        <p  style={{color:'#2E51D0',fontFamily:'outfit',fontSize:'18px'}}>Near Luminar Technolab</p>
        <p style={{color:'#2E51D0',fontFamily:'outfit',fontSize:'18px'}}>Kakkanad - 683572</p>
      </div>
      <div>
        <p style={{color:'#D02E2E',fontFamily:'outfit',fontSize:'20px'}}>Follow US</p>

        <div className='d-flex justify-content-around me-5'>
             <Link>
             <FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} size='2xl' className='me-5'/>
             </Link>
          <Link><FontAwesomeIcon icon={faFacebook} style={{color: "#000000",}} size='2xl' className='me-5'/></Link>
          <Link><FontAwesomeIcon icon={faWhatsapp}  style={{color: "#000000",}} size='2xl' className='me-5'/></Link>
          <Link><FontAwesomeIcon icon={faXTwitter}  style={{color: "#000000",}} size='2xl' className='me-5'/></Link>
          
        </div>
      </div>

        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className='text-center' style={{color:'#D02E2E',fontFamily:'outfit',fontSize:'20px'}}>Quick Links</p>
          <div className='text-center'>
            <Link to={'/'} style={{color:'#2E51D0', textDecoration:'none', fontFamily:'outfit'}} className='mb-3'>
              <p>Home</p>
            </Link>
            <Link to={'/online-class'} style={{color:'#2E51D0', textDecoration:'none', fontFamily:'outfit'}} className='mb-3'>
              <p>Online Class</p>
            </Link>
            <Link to={'/trainers'} style={{color:'#2E51D0', textDecoration:'none', fontFamily:'outfit'}} className='mb-3'>
              <p>Trainer Profiles</p>
            </Link>
            <Link to={'/register'} style={{color:'#2E51D0', textDecoration:'none', fontFamily:'outfit'}} className='mb-3'>
              <p>Register</p>
            </Link>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p style={{color:'#D02E2E',fontFamily:'outfit',fontSize:'20px'}} className='text-center'>Subscribe</p>
          <input type="text" placeholder='Enter Email' className='form-control w-75' style={{margin:'0 auto'}} />
          <div className='d-flex justify-content-center mt-5'>
          <button type='button' className='w-25 btn btn-primary p-2' style={{color:'#FF8A00',fontFamily:'outfit'}}>Subscribe</button>
          </div>
          <p style={{color:'#2E51D0', fontFamily:'outfit'}} className='mt-4 text-center'>Copyright © 2024 All Rights Reserved</p>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Footer