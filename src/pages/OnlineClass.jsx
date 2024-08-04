import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

function OnlineClass() {
  return (
    <>
    <Header />
    <div>
    <h2 className='text-center text-warning mb-5' style={{ fontFamily: 'outfit' }}>Online Class</h2>

    <div className="row">

        <div className="col-md-1"></div>
        <div className="col-md-4">
        <div className='online-container'>
        <div className='d-flex justify-content-between'>
            <img src="/online-lap.png" alt="" width={'300px'} height={'220px'} />
            <div className='p-5'>
                <p style={{color:'#FF8A00',fontFamily:'outfit'}}>Scheduled Workout</p>
                <p style={{color:'#EBF5A7',fontFamily:'outfit'}}>As per Package</p>
                <p style={{color:'#FF8A00',fontFamily:'outfit'}}>₹ 4000</p>
            </div>
        </div>
        <Link to={'https://workspace.google.com/products/meet/'} target='_blank'>
            <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}}>
                JOIN NOW
            </button>
        </Link>
        </div>
        </div>
        <div className="col-md-1"></div>

        <div className="col-md-1"></div>
        <div className="col-md-4">
        <div className='online-container'>
        <div className='d-flex justify-content-between'>
            <img src="/yoga.png" alt="" width={'300px'} height={'220px'} />
            <div className='p-5'>
                <p style={{color:'#FF8A00',fontFamily:'outfit'}}>Yoga Session</p>
                <p style={{color:'#EBF5A7',fontFamily:'outfit'}}>As per Package</p>
                <p style={{color:'#FF8A00',fontFamily:'outfit'}}>₹ 4000</p>
            </div>
        </div>
        <Link to={'https://workspace.google.com/products/meet/'} target='_blank'>
            <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}}>
                JOIN NOW
            </button>
        </Link>
    </div>
        </div>
        <div className="col-md-1"></div>
    </div>
   
    <div className="row mt-5">

<div className="col-md-1"></div>
<div className="col-md-4">
<div className='online-container'>
<div className='d-flex justify-content-between'>
    <img src="/cardio.png" alt="" width={'300px'} height={'200px'} />
    <div className='p-5'>
        <p style={{color:'#FF8A00',fontFamily:'outfit'}}>Cardio Workout Session</p>
        <p style={{color:'#EBF5A7',fontFamily:'outfit'}}>As per Package</p>
        <p style={{color:'#FF8A00',fontFamily:'outfit'}}>₹ 4000</p>
    </div>
</div>
<Link to={'https://workspace.google.com/products/meet/'} target='_blank'>
            <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}}>
                JOIN NOW
            </button>
        </Link>
</div>
</div>
<div className="col-md-1"></div>

<div className="col-md-1"></div>
<div className="col-md-4">
<div className='online-container'>
<div className='d-flex justify-content-between'>
    <img src="/zumba.png" alt="" width={'300px'} height={'240px'} />
    <div className='p-5'>
        <p style={{color:'#FF8A00',fontFamily:'outfit'}}>Zumba Dance</p>
        <p style={{color:'#EBF5A7',fontFamily:'outfit'}}>As per Package</p>
        <p style={{color:'#FF8A00',fontFamily:'outfit'}}>₹ 4000</p>
    </div>
</div>
<Link to={'https://workspace.google.com/products/meet/'} target='_blank'>
            <button className='btn btn-dark p-3 w-100' style={{color:'white',fontFamily:'outfit'}}>
                JOIN NOW
            </button>
        </Link>
</div>
</div>
<div className="col-md-1"></div>
</div>

    </div>
    <Footer />
    </>
  )
}

export default OnlineClass